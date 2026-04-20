import { ShieldCheck, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const linkSections = [
  {
    title: "Links Úteis",
    links: [
      { label: "Início", to: "/" },
      { label: "Sobre Nós", to: "/sobre" },
      { label: "Perguntas Frequentes", to: "/faq" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Documentos Legais",
    links: [
      { label: "Política de Privacidade", to: "/privacidade" },
      { label: "Termos de Uso", to: "/termos" },
      { label: "Reembolso e Cancelamento", to: "/reembolso" },
      { label: "Política de Cookies", to: "/cookies" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-lg font-bold text-primary-foreground">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Portal Rastreios
          </div>
          <p className="mb-4 text-sm leading-relaxed">
            Sua central de consulta de informações de pedidos.
          </p>
          <p className="text-xs leading-relaxed opacity-70">
            CNPJ: 53.364.388/0001-76
          </p>
        </div>

        {/* Link sections */}
        {linkSections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contato */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a href="mailto:contato@portalrastreios.com" className="transition-colors hover:text-primary-foreground">
                contato@portalrastreios.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 border-t border-primary-foreground/10 pt-8">
        <p className="text-center text-xs leading-relaxed opacity-70">
          Plataforma independente de rastreamento. Sem vínculo oficial com transportadoras, Correios ou
          estabelecimentos comerciais. As informações são obtidas de bases públicas de dados.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs opacity-70 md:flex-row">
        <p>© {new Date().getFullYear()} Portal Rastreios. Todos os direitos reservados.</p>
        <div className="flex items-center gap-1.5 text-primary">
          <Lock className="h-3.5 w-3.5" />
          <span>Navegação Segura</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
