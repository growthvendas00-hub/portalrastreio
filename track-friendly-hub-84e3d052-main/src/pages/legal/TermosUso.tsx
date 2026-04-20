import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const TermosUso = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <article className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Termos de Uso</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
          <p className="text-muted-foreground">
            Ao acessar e utilizar o Portal Rastreios, você concorda com estes Termos de Uso. Se não concordar,
            por favor não utilize o serviço.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">2. Natureza do Serviço</h2>
          <p className="text-muted-foreground">
            O Portal Rastreios é uma plataforma independente de consulta a informações públicas de rastreamento.
            Não somos transportadora, não temos vínculo oficial com Correios ou empresas de logística.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">3. Responsabilidades do Usuário</h2>
          <p className="text-muted-foreground">
            O usuário é responsável por fornecer códigos de rastreamento válidos e por utilizar o serviço de
            forma lícita, sem tentativas de violação de segurança ou uso automatizado abusivo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">4. Limitação de Responsabilidade</h2>
          <p className="text-muted-foreground">
            As informações exibidas dependem de fontes externas. O Portal Rastreios não se responsabiliza por
            atrasos, divergências ou indisponibilidades nas informações fornecidas pelas transportadoras.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">5. Modificações</h2>
          <p className="text-muted-foreground">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado do serviço
            após mudanças implica aceitação dos novos termos.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </div>
);

export default TermosUso;
