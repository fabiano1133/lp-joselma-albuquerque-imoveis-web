import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joselma Albuquerque Imóveis - Corretora em Belém, Pará",
    short_name: "Joselma Imóveis",
    description:
      "Corretora de imóveis em Belém, Pará. Especializada em compra, venda e aluguel de imóveis novos e usados. CRECI-10611 PA/AP",
    start_url: "/",
    display: "standalone",
    background_color: "#0A2540",
    theme_color: "#C9A14A",
    icons: [
      {
        src: "/perfil_1.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/perfil_1.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
