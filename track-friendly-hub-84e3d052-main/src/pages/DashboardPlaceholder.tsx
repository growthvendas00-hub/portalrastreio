import { useLocation } from "react-router-dom";
import { Construction } from "lucide-react";

const titles: Record<string, string> = {
  "/dashboard/rastreamentos": "Rastreamentos",
  "/dashboard/pacotes": "Pacotes",
  "/dashboard/relatorios": "Relatórios",
  "/dashboard/configuracoes": "Configurações",
};

export default function DashboardPlaceholder() {
  const { pathname } = useLocation();
  const title = titles[pathname] || "Página";

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
        <Construction className="h-8 w-8 text-accent-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      <p className="max-w-md text-muted-foreground">
        Esta seção está em construção e será liberada em breve.
      </p>
    </div>
  );
}
