import { useState } from "react";

export interface TrackingResult {
  status: string;
  date: string;
  location: string;
  trackingCode: string;
}

export function useTracking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);

  const track = async (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setError("Por favor, insira um código de rastreamento.");
      return;
    }

    if (trimmed.length > 30 || !/^[A-Z]{2}[0-9]{9}[A-Z]{2}$/.test(trimmed)) {
      setError("Código inválido. Use o formato: AA123456789BB");
      return;
    }

    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("https://backend-0mis.onrender.com/rastrear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: trimmed }),
      });

      if (!res.ok) {
        if (res.status === 404) {
          setError("Código não encontrado ou indisponível no momento. Tente novamente.");
        } else {
          setError("Serviço indisponível. Tente novamente mais tarde.");
        }
        return;
      }

      const responseData = await res.json();

      let parsedData: any;
      try {
        parsedData = JSON.parse(responseData.json);
      } catch {
        setError("Resposta inválida do servidor. Tente novamente mais tarde.");
        return;
      }

      if (parsedData?.erro === true) {
        throw new Error(parsedData?.mensagem || "Erro retornado pela API.");
      }

      const events = parsedData?.eventos || parsedData?.tracks || parsedData?.events;
      const currentEvent = Array.isArray(events) ? events[0] : parsedData;

      if (!currentEvent) {
        setError("Código não encontrado ou indisponível.");
        return;
      }

      const status = currentEvent?.descricao || currentEvent?.status || "Status atualizado";

      const dataStr = currentEvent?.data || currentEvent?.date || "";
      const horaStr = currentEvent?.hora || currentEvent?.hour || "";
      const date = dataStr
        ? `${dataStr}${horaStr ? " - " + horaStr : ""}`
        : "Data em processamento";

      const cidade = currentEvent?.unidade?.endereco?.cidade;
      const uf = currentEvent?.unidade?.endereco?.uf;
      const location =
        cidade && uf
          ? `${cidade}/${uf}`
          : currentEvent?.local ||
            currentEvent?.unidade?.local ||
            "Em trânsito nacional";

      setResult({ status, date, location, trackingCode: trimmed });
    } catch (err) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setError("Erro de conexão. Verifique sua internet e tente novamente.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, result, track };
}
