import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Reembolso = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <article className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Reembolso e Cancelamento</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Serviço Gratuito</h2>
          <p className="text-muted-foreground">
            O Portal Rastreios é uma plataforma 100% gratuita de consulta de informações públicas de rastreamento.
            Não cobramos taxas de cadastro, consulta ou utilização.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Cancelamento de Conta</h2>
          <p className="text-muted-foreground">
            Caso você possua uma conta cadastrada, pode solicitar o cancelamento e a exclusão de seus dados a
            qualquer momento, em conformidade com a LGPD, enviando um e-mail para contato@portalrastreios.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Direito de Arrependimento</h2>
          <p className="text-muted-foreground">
            Como não realizamos cobranças, não há aplicação do direito de arrependimento previsto no Código de
            Defesa do Consumidor (Art. 49). Para dúvidas, entre em contato com nosso suporte.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </div>
);

export default Reembolso;
