import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/agm";
import heroVideo from "../../../public/videos/hero.mp4.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>

      {/* Sombra / overlays */}
      <div className="absolute inset-0 bg-background/55" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-dark)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 tech-grid opacity-60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">
            Distribuição B2B • Autopeças elétricas
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Seu fornecedor de autopeças elétricas e acessórios com{" "}
            <span className="text-gold">entrega imediata</span>, garantia de verdade e suporte que
            resolve.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Parceira de lojistas e oficinas em todo o Brasil, com multimídia, iluminação, som,
            câmeras e acessórios — em condições pensadas para quem revende.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 hover:glow-gold"
            >
              Quero ser parceiro AGM <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary/50 px-7 py-4 font-display text-sm font-bold tracking-widest text-primary uppercase transition-colors hover:bg-primary/10"
            >
              <MessageCircle className="h-4 w-4" /> Falar agora no WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs tracking-wide text-muted-foreground">
            Atendimento comercial direto — sem intermediários, sem enrolação.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}