import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Diferenciais,
  Sobre,
  Produtos,
  Servicos,
  Depoimentos,
  Oferta,
  Localizacao,
  CtaFinal,
} from "@/components/site/Sections";
import { Cadastro } from "@/components/site/Cadastro";
import { Footer } from "@/components/site/Footer";

const title = "AGM Auto Partes | Autopeças elétricas e acessórios para lojistas";
const description =
  "Fornecedor B2B de autopeças elétricas e acessórios: multimídia, LED, som, câmeras e módulos. Entrega imediata, garantia real e condições exclusivas para lojistas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Produtos />
        <Servicos />
        <Depoimentos />
        <Oferta />
        <Cadastro />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
