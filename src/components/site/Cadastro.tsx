import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/agm";

const FIELDS = [
  { name: "lojista", label: "Nome do lojista", type: "text", required: true },
  { name: "loja", label: "Nome da loja", type: "text", required: true },
  { name: "cnpj", label: "CNPJ", type: "text", required: true },
  { name: "ie", label: "Inscrição Estadual", type: "text", required: false },
  { name: "endereco", label: "Endereço", type: "text", required: true },
  { name: "whatsapp", label: "WhatsApp para contato", type: "tel", required: true },
];

export function Cadastro() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const linhas = [
      "Cadastro de lojista — AGM Auto Partes",
      ...FIELDS.map((f) => `${f.label}: ${data.get(f.name) ?? ""}`),
      `Histórico de crédito: ${data.get("credito") ?? ""}`,
    ];
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank");
    toast.success("Cadastro enviado! Nossa equipe comercial vai retornar em breve.");
    e.currentTarget.reset();
    setSending(false);
  }

  return (
    <section id="cadastro" className="relative border-t border-border py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-primary uppercase">
            Cadastro de lojista
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Vamos formalizar essa <span className="text-gold">parceria</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Preencha seus dados e nossa equipe comercial retorna com as condições exclusivas para
            sua loja.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-sm border border-border bg-card p-7 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <label key={f.name} className="flex flex-col gap-2">
                <span className="font-display text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                  {f.label}
                </span>
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            ))}
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="font-display text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                Histórico de crédito / observações
              </span>
              <textarea
                name="credito"
                rows={4}
                className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 hover:glow-gold disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> Enviar cadastro
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Seus dados são usados apenas para análise comercial e contato da equipe AGM.
          </p>
        </form>
      </div>
    </section>
  );
}