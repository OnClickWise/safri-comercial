"use client";

import { useState } from "react";
import { Inter } from "next/font/google";






const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
  ,
});

export function ContactoForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Email enviado com sucesso! Verifique seu email de confirmação.");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`Erro: ${data.error}`);
      }
    } catch {
      setStatus("Erro ao enviar email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main >
     
      
        <form onSubmit={handleSubmit} className="gap-6 items-center justify-center px-3 rounded-3xl shadow-2xl bg-white py-4 grid">
          <h2 className={`${inter.className} text-[48px] text-black font-[600] tracking-[-0.02em] leading-tight`}>
  Envie sua mensagem
</h2>
          <div className="grid grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white outline-1 rounded text-black"
            required
          />
        
        
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
             className="w-full p-3 bg-white outline-1 rounded text-black"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
             className="w-full p-3 bg-white outline-1 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
             className="w-full p-3 bg-white outline-1 rounded text-black"
            required
          />
          
            </div>
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
             className="w-full p-3 bg-white outline-1 rounded text-black"
            required
          />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className={`
              ${inter.className} 
              
              text-[12px] 
              text-black 
              font-[600] 
              tracking-[-0.02em] 
              leading-tight
              py-3 
              w-1/2
              bg-black 
              text-white
              font-semibold 
               
              hover:bg-gray-300 
              hover:text-red-700 
              transition-all 
              duration-300
              ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
          </div>
          
          {status && (
            <p className={`mt-4 text-center p-3 rounded-lg ${
              status.includes("sucesso") 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
              {status}
            </p>
          )}
        </form>
      
        
    

    </main>
  );
}