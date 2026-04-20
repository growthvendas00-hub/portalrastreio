const steps = [
  { num: "1", title: "Insira o Número", text: "Digite o número de rastreamento ou CPF no campo" },
  { num: "2", title: "Consultamos o Status", text: "Pesquisamos o status nas bases públicas" },
  { num: "3", title: "Confira o Status", text: "Consulte as informações do rastreio organizadas" },
];

const HowItWorks = () => (
  <section className="bg-background py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Como Começar</h2>
      <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        {/* Connecting line (desktop) */}
        <div className="absolute left-[16.666%] right-[16.666%] top-8 hidden h-0.5 bg-border md:block" />

        {steps.map((s) => (
          <div key={s.num} className="relative flex flex-col items-center text-center">
            <div className="z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              {s.num}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="max-w-xs text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
