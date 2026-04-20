import { LayoutGrid, Bell, Clock } from "lucide-react";

const features = [
  { icon: LayoutGrid, title: "Somente Um Ponto", text: "Uma plataforma para todos os seus pacotes" },
  { icon: Bell, title: "Tenha Notificações", text: "Configure notificações para acompanhar seu pedido" },
  { icon: Clock, title: "Pesquisas Passadas", text: "Arquivo total das consultas" },
];

const FeaturesSection = () => (
  <section className="bg-secondary py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground">Diferenciais da Plataforma</h2>
        <p className="mt-3 text-muted-foreground">Centralizamos conteúdos para simplificar sua visualização</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <f.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
