import { contacts, companyInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background-alt)] text-[var(--foreground)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-extrabold tracking-wide">SAFRI Comercial, Lda.</p>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{companyInfo.legalName}</p>
          <p className="mt-3 text-sm text-[var(--foreground)]">NIF: {companyInfo.nif}</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)]">Contatos Oficiais</p>
          <p className="mt-3 text-sm">
            Tel: <a className="text-[var(--safri-red-light)] underline" href={`tel:${contacts.phone.replace(/\s+/g, "")}`}>{contacts.phone}</a>
          </p>
          <p className="text-sm">
            E-mail: <a className="text-[var(--safri-red-light)] underline" href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </p>
          <p className="text-sm">
            WhatsApp:{" "}
            <a className="text-[var(--safri-red-light)] underline" href={`https://wa.me/${contacts.whatsapp}`} target="_blank" rel="noopener noreferrer">
              +{contacts.whatsapp}
            </a>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
            {contacts.addresses.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-[var(--foreground)]">{item.title}:</span> {item.address}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)]">Atendimento</p>
          <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
            Estamos disponíveis para solicitações comerciais B2B/B2C, parcerias estratégicas e propostas de
            fornecimento nacional e internacional.
          </p>
          <p className="mt-4 text-xs text-[var(--text-tertiary)]">© {new Date().getFullYear()} SAFRI Comercial, Lda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
