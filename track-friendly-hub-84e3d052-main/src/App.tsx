import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthGuard } from "@/components/AuthGuard";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";

const Auth = lazy(() => import("./pages/Auth.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PoliticaPrivacidade = lazy(() => import("./pages/legal/PoliticaPrivacidade.tsx"));
const TermosUso = lazy(() => import("./pages/legal/TermosUso.tsx"));
const PoliticaCookies = lazy(() => import("./pages/legal/PoliticaCookies.tsx"));
const Reembolso = lazy(() => import("./pages/legal/Reembolso.tsx"));
const SobreNos = lazy(() => import("./pages/legal/SobreNos.tsx"));
const FAQ = lazy(() => import("./pages/legal/FAQ.tsx"));
const Contato = lazy(() => import("./pages/legal/Contato.tsx"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos" element={<TermosUso />} />
              <Route path="/cookies" element={<PoliticaCookies />} />
              <Route path="/reembolso" element={<Reembolso />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route
                path="/dashboard/*"
                element={
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
