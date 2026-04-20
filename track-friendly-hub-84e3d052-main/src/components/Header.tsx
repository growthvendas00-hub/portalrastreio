import { ShieldCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Início", hash: "", path: "/" },
  { label: "Como Funciona", hash: "como-funciona", path: "/" },
  { label: "Diferenciais", hash: "diferenciais", path: "/" },
  { label: "Transparência", hash: "transparencia", path: "/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    if (isHome && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buildHref = (hash: string) => (hash ? `/#${hash}` : "/");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <ShieldCheck className="h-6 w-6 text-primary" />
          Portal Rastreios
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={buildHref(link.hash)}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
            Login
          </Button>
          <Button size="sm" onClick={() => navigate("/auth")}>
            Criar Conta
          </Button>
        </div>

        <button type="button" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="mb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={buildHref(link.hash)}
                className="text-sm font-medium text-muted-foreground"
                onClick={(e) => {
                  handleNavClick(e, link.hash);
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/auth")}>
              Login
            </Button>
            <Button size="sm" className="w-full" onClick={() => navigate("/auth")}>
              Criar Conta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
