"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

const schema = z.object({
  nome: z.string().min(2, "Informe um nome valido."),
  email: z.email("Informe um e-mail valido."),
  empresa: z.string().min(2, "Informe o nome da empresa."),
  mensagem: z.string().min(10, "A mensagem deve ter ao menos 10 caracteres."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      mensagem: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setResponseMessage(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setResponseMessage(data.message ?? "Nao foi possivel enviar sua solicitacao. Tente novamente.");
      return;
    }

    setResponseMessage("Mensagem enviada com sucesso. A equipe SAFRI retornara em breve.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-slate-700 bg-[var(--off-white)] p-6 shadow-lg">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="nome" className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            Nome
          </label>
          <Input id="nome" placeholder="Seu nome" {...register("nome")} />
          {errors.nome ? <p className="mt-1 text-xs text-[var(--safri-red-light)]">{errors.nome.message}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            E-mail
          </label>
          <Input id="email" type="email" placeholder="voce@empresa.com" {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-[var(--safri-red-light)]">{errors.email.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="empresa" className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            Empresa
          </label>
          <Input id="empresa" placeholder="Nome da empresa" {...register("empresa")} />
          {errors.empresa ? <p className="mt-1 text-xs text-[var(--safri-red-light)]">{errors.empresa.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensagem" className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            Mensagem
          </label>
          <Textarea id="mensagem" placeholder="Como podemos ajudar?" {...register("mensagem")} />
          {errors.mensagem ? <p className="mt-1 text-xs text-[var(--safri-red-light)]">{errors.mensagem.message}</p> : null}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-5 w-full md:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar solicitacao"}
      </Button>

      {responseMessage ? <p className="mt-3 text-sm text-slate-400">{responseMessage}</p> : null}
    </form>
  );
}
