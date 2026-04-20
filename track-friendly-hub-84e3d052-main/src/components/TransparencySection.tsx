import { Info } from "lucide-react";

const TransparencySection = () => (
  <section className="bg-background py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="rounded-xl border-2 border-border bg-card p-8 lg:p-12">
        <div className="mb-8 flex items-center gap-3">
          <Info className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-card-foreground">Política de Transparência e Uso</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Finalidade do Serviço
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Este site opera como um agregador e buscador independente de informações logísticas públicas. Não somos
              transportadora e não temos vínculo direto com a operação logística.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Privacidade de Dados
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Não armazenamos dados pessoais dos usuários. As consultas de rastreamento são processadas em tempo real
              utilizando protocolos seguros de criptografia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TransparencySection;
