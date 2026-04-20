import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "O Portal Rastreios é gratuito?", a: "Sim, todas as consultas de rastreamento são 100% gratuitas." },
  { q: "Vocês são uma transportadora?", a: "Não. Somos uma plataforma independente de consulta de informações públicas de rastreamento." },
  { q: "Meus dados ficam armazenados?", a: "Não armazenamos códigos de rastreio. Tudo é processado em tempo real." },
  { q: "Quais transportadoras vocês suportam?", a: "Suportamos Correios e diversas transportadoras privadas via APIs públicas." },
  { q: "Como entrar em contato?", a: "Envie um e-mail para contato@portalrastreios.com e responderemos em até 48h úteis." },
];

const FAQ = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="container mx-auto flex-1 px-4 py-8 lg:px-8 lg:py-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>
      <div className="max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-foreground">Perguntas Frequentes</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
