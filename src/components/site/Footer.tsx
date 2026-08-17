import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, MAPS_URL, PHONE_DISPLAY } from "@/lib/agm";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">
            AGM Auto Partes
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Soluções imediatas em autopeças elétricas e acessórios automotivos, com entrega ágil,
            garantia real e suporte especializado para lojistas e oficinas de todo o Brasil.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Produtos</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Multimídia Automotiva",
              "Iluminação (Lâmpadas LED)",
              "Som Automotivo",
              "Câmeras de Ré",
              "Módulos de Vidro",
            ].map((p) => (
              <li key={p}>
                <a href="#produtos" className="transition-colors hover:text-primary">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Atendimento</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: {PHONE_DISPLAY}</li>
            <li>Segunda a sábado</li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-primary transition-opacity hover:opacity-80"
              >
                Fale conosco
              </a>
            </li>
            <li>
              <a href="#cadastro" className="text-primary transition-opacity hover:opacity-80">
                Cadastre sua loja
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Localização</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            São Paulo — SP
            <br />
            Endereço confirmado no mapa
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-primary transition-opacity hover:opacity-80"
          >
            Ver no mapa
          </a>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold tracking-widest uppercase">Redes sociais</h3>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © 2026 AGM Auto Partes. Todos os direitos reservados. | Formas de pagamento: PIX, Cartão
          de Crédito, Cartão de Débito, Boleto e Dinheiro.
        </p>
      </div>
    </footer>
  );
}