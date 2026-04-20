import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Página não encontrada</p>
        <p className="mb-6 text-sm text-muted-foreground">
          O endereço <code className="rounded bg-background px-2 py-0.5 font-mono text-xs">{location.pathname}</code> não existe.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Voltar para o Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
