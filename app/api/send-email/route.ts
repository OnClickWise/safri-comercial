import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message, name, company } = await req.json();

  if (!email || !subject || !message || !name || !company) {
    return new Response(JSON.stringify({ success: false, error: "Todos os campos são obrigatórios" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password do Gmail
    },
  });

  try {
    // 1️⃣ Email para a empresa
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // email da empresa
      subject: `Novo contato: ${subject}`,
      text: `Mensagem de: ${email}\n\n${name}\n\n${company}\n\n${message}`,
    });

    // 2️⃣ Email de confirmação para o usuário
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // email do usuário
      subject: "Recebemos sua mensagem!",
      text: `Olá,\n\n "${name}" Recebemos sua mensagem com o assunto "${subject}". Nossa equipe responderá em breve.\n\nObrigado!`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    let errorMessage = "Erro ao enviar email";
    if (error instanceof Error) errorMessage = error.message;
    console.error(errorMessage);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}