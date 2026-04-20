import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const PoliticaPrivacidade = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <article className="prose prose-slate max-w-3xl dark:prose-invert">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Política de Privacidade</h1>
        <p className="mb-8 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">1. Informações Coletadas</h2>
          <p className="text-muted-foreground">
            O Portal Rastreios coleta apenas as informações estritamente necessárias para realizar consultas de rastreamento.
            Os códigos de rastreio são processados em tempo real e não armazenados em nossos servidores.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">2. Uso dos Dados</h2>
          <p className="text-muted-foreground">
            Não compartilhamos dados pessoais com terceiros. As consultas são realizadas via APIs públicas de
            rastreamento e os resultados são exibidos diretamente ao usuário.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">3. Cookies</h2>
          <p className="text-muted-foreground">
            Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como os
            usuários interagem com a plataforma. Você pode desativá-los nas configurações do seu navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">4. Seus Direitos (LGPD)</h2>
          <p className="text-muted-foreground">
            Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a acessar,
            corrigir, excluir ou solicitar a portabilidade dos seus dados. Entre em contato pelo e-mail
            contato@portalrastreios.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">5. Segurança</h2>
          <p className="text-muted-foreground">
            Adotamos medidas técnicas e organizacionais adequadas para proteger as informações tratadas, incluindo
            criptografia HTTPS em todas as comunicações.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </div>
);

export default PoliticaPrivacidade;
