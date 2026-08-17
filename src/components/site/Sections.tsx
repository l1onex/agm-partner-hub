import {
  Truck,
  ShieldCheck,
  Headphones,
  Handshake,
  Star,
  CreditCard,
  Bike,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL, MAPS_URL, PHONE_DISPLAY } from "@/lib/agm";
import loja from "@/assets/loja.jpg";
import prodMultimidia from "@/assets/prod-multimidia.jpg";
import prodLed from "@/assets/prod-led.jpg";
import prodFalante from "@/assets/prod-falante.jpg";
import prodCamera from "@/assets/prod-camera.jpg";
import prodModulo from "@/assets/prod-modulo.jpg";

function SectionTag({ children }: { children: string }) {
  return (
    <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-primary uppercase">
      {children}
    </span>
  );
}

const DIFERENCIAIS = [
  {
    icon: Truck,
    title: "Entrega Imediata",
    text: "Pedido fechado, peça a caminho. Trabalhamos com entrega via motoboy e motouber para que sua loja nunca fique parada esperando estoque.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia Real",
    text: "Garantia estendida em toda a linha, com troca imediata quando necessário. Você revende com a segurança de quem tem retaguarda.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    text: "Dúvidas sobre instalação, prazo ou condição comercial? Nosso time responde rápido e resolve — do primeiro contato ao pós-venda.",
  },
  {
    icon: Handshake,
    title: "Parceria de Verdade",
    text: "Políticas claras, preços competitivos e condições específicas para lojistas. Aqui você sabe exatamente com quem está negociando.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTag>Diferenciais</SectionTag>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
          Por que centenas de lojistas escolhem a AGM como <span className="text-gold">parceira</span>
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.title}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="grid h-12 w-12 place-items-center rounded-sm border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold tracking-wide uppercase">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTag>Sobre</SectionTag>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Quem é a <span className="text-gold">AGM Auto Partes</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Somos especialistas em soluções imediatas para autopeças elétricas e acessórios
            automotivos. Atendemos o mercado B2B — lojistas e oficinas que precisam de um fornecedor
            ágil, confiável e com suporte próximo, sem burocracia e sem surpresas na hora de fechar
            negócio.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {[
              ["100%", "Foco B2B"],
              ["5★", "Google"],
              ["Same day", "Entrega"],
            ].map(([big, small]) => (
              <div key={small} className="bg-card p-5">
                <p className="font-display text-xl font-bold text-primary">{big}</p>
                <p className="mt-1 text-[11px] tracking-widest text-muted-foreground uppercase">
                  {small}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-sm border border-primary/20" aria-hidden="true" />
          <img
            src={loja}
            alt="Fachada e equipe da AGM Auto Partes"
            width={1200}
            height={800}
            loading="lazy"
            className="relative w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const PRODUTOS = [
  {
    img: prodMultimidia,
    name: "Multimídia Automotiva",
    desc: "Multimídia Android 9\" 2DIN, 4GB/64GB, tela QLED, CarPlay e Android Auto sem fio, Bluetooth, FM, WiFi e GPS.",
    price: "R$ 769,00",
  },
  {
    img: prodLed,
    name: "Lâmpadas de LED",
    desc: "Par de lâmpadas Nano LED S14 Shocklight H4, 12V, 64W, 7200LM, 6000K, sem canbus. Mais iluminação, mais segurança.",
    price: "R$ 105,00",
  },
  {
    img: prodFalante,
    name: "Alto-falantes",
    desc: "Par de alto-falantes triaxiais Bravox 6\", 100W RMS, 4 ohms, 89dB. Som de qualidade para todo tipo de veículo.",
    price: "R$ 99,00",
  },
  {
    img: prodCamera,
    name: "Câmera de Ré",
    desc: "Câmera de ré 2x1 modelo borboleta, 480p, ângulo de 90°, 60fps. Instalação simples, alta demanda.",
    price: "R$ 30,00",
  },
  {
    img: prodModulo,
    name: "Módulo de Vidro",
    desc: "Módulo de vidro Quantum QA108, universal, para 2 ou 4 portas. Item essencial no mix de qualquer loja.",
    price: "R$ 129,00",
  },
];

export function Produtos() {
  return (
    <section id="produtos" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTag>Produtos em destaque</SectionTag>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Linha completa para sua loja <span className="text-gold">vender mais</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Produtos com giro rápido, alta procura e ótima margem para revenda.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUTOS.map((p, i) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-sm bg-background/80 px-2 py-1 font-display text-[10px] tracking-widest text-primary uppercase backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold tracking-wide uppercase">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <p className="mt-5 font-display text-2xl font-bold text-primary">{p.price}</p>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center rounded-sm border border-primary/40 bg-primary/5 p-8">
            <h3 className="font-display text-xl font-bold uppercase">
              Condições especiais para lojistas
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Tabela exclusiva de revenda, com margem pensada para o seu giro.
            </p>
            <a
              href="#cadastro"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Ver condições especiais <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICOS = [
  { icon: Bike, text: "Entrega via motoboy ou motouber" },
  { icon: ShieldCheck, text: "Garantia estendida com troca imediata" },
  { icon: Handshake, text: "Parcerias e condições específicas para lojistas" },
  { icon: CreditCard, text: "PIX, cartão de crédito e débito, boleto e dinheiro" },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTag>Serviços e condições comerciais</SectionTag>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
          Mais do que peças: uma operação pensada para o{" "}
          <span className="text-gold">seu negócio</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICOS.map((s) => (
            <div
              key={s.text}
              className="flex items-center gap-5 rounded-sm border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="font-display text-sm font-semibold tracking-wide uppercase">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DEPOIMENTOS = [
  {
    text: "Meu agradecimento à Sulamita, ao Jonas e a toda a equipe da AGM pelo suporte, dedicação e atendimento de excelência. Vocês fazem a diferença no nosso dia a dia.",
    name: "Erick Machado",
  },
  { text: "Atendimento exemplar. Bom preço e produtos de qualidade.", name: "Ricardo Ferraz" },
  {
    text: "Trabalho há bastante tempo com eles: ótimos preços, peças de qualidade e ótimo atendimento. Nota 10.",
    name: "Igor Murilo",
  },
  {
    text: "Atendimento excelente — Sulamita, João e Jonas são os melhores.",
    name: "Thiago Lacerda",
  },
  {
    text: "Loja muito top, ótimos produtos, preços acessíveis para todos os gostos e tipos. Vale a pena o investimento.",
    name: "Danilo Pereira",
  },
  { text: "Melhores produtos e ótimos preços. Sempre recomendo.", name: "Felipe Gregorio" },
  {
    text: "Empresa séria, com excelente atendimento e ótimos produtos. A equipe está sempre disposta a ajudar e atender com agilidade. Recomendo muito.",
    name: "Isadora Sola",
  },
  { text: "Ótimo trabalho, pessoal bem atencioso.", name: "Thiago Fagundes" },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Prova social</SectionTag>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Quem já é parceiro, <span className="text-gold">recomenda</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-sm border border-primary/40 bg-primary/10 px-4 py-3">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Avaliação 5 estrelas no Google — clientes reais, resultados reais.
            </p>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.name}
              className="mb-6 break-inside-avoid rounded-sm border border-border bg-card p-7"
            >
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{d.text}”
              </blockquote>
              <figcaption className="mt-5 font-display text-xs font-bold tracking-widest uppercase">
                {d.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Oferta() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-primary/40 bg-card p-10 text-center lg:p-16">
          <div className="absolute inset-0 tech-grid opacity-70" aria-hidden="true" />
          <div className="relative">
            <SectionTag>Oferta exclusiva</SectionTag>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Condição especial só para quem <span className="text-gold">chega por aqui</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Lojistas que se cadastrarem através desta página recebem uma condição comercial
              exclusiva na primeira compra. Preencha o formulário e nosso time entra em contato com
              os detalhes.
            </p>
            <a
              href="#cadastro"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 hover:glow-gold"
            >
              Quero minha condição especial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTag>Localização</SectionTag>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Onde <span className="text-gold">estamos</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Visite a AGM Auto Partes ou fale com a gente antes de vir — endereço confirmado e mapa
          integrado abaixo.
        </p>
        <div className="mt-10 overflow-hidden rounded-sm border border-border">
          <iframe
            title="Mapa AGM Auto Partes"
            src="https://www.google.com/maps?q=AGM+Auto+Partes&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest text-primary uppercase"
        >
          <MapPin className="h-4 w-4" /> Ver no mapa
        </a>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Pronto para vender mais com um parceiro que <span className="text-gold">entrega?</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Fale agora com o time comercial da AGM Auto Partes e garanta sua condição especial de
          lojista.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-display text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 hover:glow-gold"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <a
            href="#cadastro"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary/50 px-8 py-4 font-display text-sm font-bold tracking-widest text-primary uppercase transition-colors hover:bg-primary/10"
          >
            Preencher cadastro
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">{PHONE_DISPLAY}</p>
      </div>
    </section>
  );
}