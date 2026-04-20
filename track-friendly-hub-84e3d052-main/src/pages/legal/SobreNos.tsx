import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ShieldCheck, Zap, Users } from "lucide-react";

const SobreNos = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Sobre o Portal Rastreios</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Somos uma plataforma independente que centraliza consultas de rastreamento de pedidos de forma rápida,
          segura e gratuita.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Seguro", text: "Conexões criptografadas e nenhum dado pessoal armazenado." },
            { icon: Zap, title: "Rápido", text: "Consultas em tempo real diretamente das fontes oficiais." },
            { icon: Users, title: "Independente", text: "Sem vínculo com transportadoras ou estabelecimentos comerciais." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6">
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SobreNos;
