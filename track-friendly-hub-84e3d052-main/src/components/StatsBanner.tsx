const stats = [
  { value: "95K+", label: "Consultas Hoje" },
  { value: "15K+", label: "Usuários Ativos" },
  { value: "Estável", label: "Disponibilidade" },
  { value: "Ampla Cobertura", label: "Fontes Oficiais" },
];

const StatsBanner = () => (
  <section className="relative bg-primary py-14">
    {/* Subtle dotted pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="container relative mx-auto grid gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="text-3xl font-extrabold text-primary-foreground">{s.value}</p>
          <p className="mt-1 text-sm font-medium text-primary-foreground/80">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBanner;
