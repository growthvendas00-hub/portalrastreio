import { useState } from "react";
import { Search, Info, MapPin, Zap, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTracking } from "@/hooks/useTracking";

const HeroSection = () => {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const { loading, error, result, track } = useTracking();

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.trackingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => track(code);

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-accent to-[hsl(320_40%_97%)] py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Plataforma Operacional
        </div>

        <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Siga o rastreio online
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Acesse o andamento do seu rastreio sem sair desta página
        </p>

        {/* Warning box */}
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-lg border border-warning-border bg-warning p-4 text-left text-sm text-warning-foreground">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <p>
            <strong>Aviso:</strong> Sistema de consulta de rastreios. Recurso privado, não representamos lojas.
          </p>
        </div>

        {/* Search input */}
        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="RA 123 456 789 BR"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && handleSubmit()}
              className="h-12 w-full rounded-lg border border-border bg-background px-4 pr-10 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button
            size="lg"
            className="h-12 px-6 text-sm font-bold uppercase tracking-wide"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Buscando..." : "Conferir Resultado"}
          </Button>
        </div>

        {/* Error message */}
        {error && (
          <p className="mt-3 text-sm font-medium text-destructive">{error}</p>
        )}

        {/* Premium Result Card */}
        {result && (
          <div className="mx-auto mt-6 max-w-xl overflow-hidden rounded-xl border border-border shadow-lg">
            {/* Header - Purple */}
            <div className="flex items-center justify-between rounded-t-xl bg-purple-600 px-5 py-4">
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-200">
                  Chave de Tracking
                </p>
                <p className="mt-0.5 text-lg font-bold tracking-wide text-white">
                  {result.trackingCode}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="rounded-lg p-2 transition-colors hover:bg-purple-500"
                title="Copiar código"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-purple-200" />
                ) : (
                  <Copy className="h-5 w-5 text-purple-200" />
                )}
              </button>
            </div>

            {/* Body */}
            <div className="bg-background px-5 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">{result.status}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{result.date}</p>
                </div>
              </div>

              <div className="my-4 border-t border-border" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-left">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm text-foreground">{result.location}</span>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-0.5 text-xs font-semibold text-green-700">
                  Atual
                </span>
              </div>
            </div>

            <div className="border-t border-border bg-muted/50 py-2 text-center">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Registro Público • Portal Rastreios
              </p>
            </div>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Formato esperado:{" "}
          <span className="inline-flex gap-1">
            {["RA", "123", "456", "789", "BR"].map((t) => (
              <span key={t} className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
