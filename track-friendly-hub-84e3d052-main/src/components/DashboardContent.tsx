import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Bell, Search, Package, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

const METRICS_DATA = [
  {
    title: "Consultas",
    value: "9.641",
    sub: "+18% este mês",
    subColor: "text-emerald-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    Icon: Search,
  },
  {
    title: "Pacotes",
    value: "411",
    sub: "+3% este mês",
    subColor: "text-emerald-600",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    Icon: Package,
  },
  {
    title: "Entregas",
    value: "244",
    sub: "+16% este mês",
    subColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    Icon: CheckCircle2,
  },
  {
    title: "Taxa de Sucesso",
    value: "91,4%",
    sub: "Últimos 30 dias",
    subColor: "text-muted-foreground",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    Icon: TrendingUp,
  },
];

const ROWS_DATA = [
  {
    code: "8C880586216BR",
    name: "Ana Pereira",
    status: "Saiu para entrega",
    statusClass: "bg-sky-100 text-sky-700",
    time: "há 2d",
  },
  {
    code: "AD797343700BR",
    name: "Rafael Pereira",
    status: "Entregue",
    statusClass: "bg-emerald-100 text-emerald-700",
    time: "há 2h",
  },
  {
    code: "26302171626BR",
    name: "João Lima",
    status: "Processando",
    statusClass: "bg-muted text-foreground",
    time: "há 1d",
  },
];

export function DashboardContent() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState(METRICS_DATA);
  const [rows, setRows] = useState(ROWS_DATA);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(METRICS_DATA);
      setRows(ROWS_DATA);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Top bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{getGreeting()} 👋</h1>
          <p className="text-sm text-muted-foreground">Aqui está um resumo da sua operação.</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              U
            </div>
            <span className="hidden text-sm font-medium text-foreground sm:inline">Usuário</span>
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5">
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[120px] rounded-xl" />
            ))
          : metrics.map((m) => (
              <div key={m.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{m.title}</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{m.value}</p>
                    <p className={`mt-1 text-xs font-medium ${m.subColor}`}>{m.sub}</p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${m.iconBg}`}>
                    <m.Icon className={`h-5 w-5 ${m.iconColor}`} />
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Activity table */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-base font-semibold text-foreground">Atividade Recente</h2>
          <button className="text-sm font-medium text-primary hover:underline">Ver tudo</button>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="space-y-3 px-5 pb-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-full rounded" />
              ))}
            </div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-t border-border">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Código</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Destinatário</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fresco</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.code} className="border-t border-border last:border-b-0">
                    <td className="whitespace-nowrap px-5 py-3 font-mono text-sm font-medium text-foreground">{r.code}</td>
                    <td className="px-5 py-3 text-foreground">{r.name}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${r.statusClass}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
