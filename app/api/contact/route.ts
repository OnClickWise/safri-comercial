import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  empresa: z.string().min(2),
  mensagem: z.string().min(10),
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const requestStore = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = requestStore.get(ip) ?? [];
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS) {
    requestStore.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  requestStore.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Muitas requisicoes em pouco tempo. Tente novamente em instantes." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Dados invalidos no formulario." }, { status: 400 });
    }

    const { nome, email, empresa, mensagem } = parsed.data;

    if (!resend) {
      return NextResponse.json({ message: "Servico de e-mail nao configurado." }, { status: 500 });
    }

    await resend.emails.send({
      from: "Safri Website <onboarding@resend.dev>",
      to: ["safri@safri.co.ao"],
      subject: `Novo contato de ${nome} (${empresa})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Novo contato pelo site SAFRI</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Contato enviado com sucesso." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}
