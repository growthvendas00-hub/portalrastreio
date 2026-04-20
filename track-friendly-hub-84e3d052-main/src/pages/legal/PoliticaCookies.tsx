import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const PoliticaCookies = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <article className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Política de Cookies</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">O que são cookies?</h2>
          <p className="text-muted-foreground">
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site.
            Eles permitem que o site reconheça suas preferências e melhore sua experiência.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Tipos de cookies utilizados</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong className="text-foreground">Essenciais:</strong> necessários para o funcionamento do site.</li>
            <li><strong className="text-foreground">Analíticos:</strong> ajudam a entender como os usuários interagem com a plataforma.</li>
            <li><strong className="text-foreground">Funcionais:</strong> permitem lembrar preferências e personalizações.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Gerenciamento</h2>
          <p className="text-muted-foreground">
            Você pode gerenciar ou desativar cookies a qualquer momento nas configurações do seu navegador.
            Note que algumas funcionalidades podem ser afetadas.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </div>
);

export default PoliticaCookies;
