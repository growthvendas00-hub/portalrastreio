import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, Mail, Clock } from "lucide-react";

const Contato = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Contato</h1>
        <p className="mb-10 text-lg text-muted-foreground">
          Estamos disponíveis para tirar dúvidas, receber sugestões ou atender solicitações relacionadas à LGPD.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
            <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-card-foreground">E-mail</h3>
              <a href="mailto:contato@portalrastreios.com" className="text-sm text-muted-foreground hover:text-primary">
                contato@portalrastreios.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
            <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-card-foreground">Horário de Atendimento</h3>
              <p className="text-sm text-muted-foreground">Segunda a sexta, das 9h às 18h (horário de Brasília)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contato;
