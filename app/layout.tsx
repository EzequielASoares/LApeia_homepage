import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";
import "./innovation.css";
import "./institutional.css";
import "./programs.css";
import "./program-journey.css";
import "./responsive-nav.css";

export const metadata: Metadata = {
  title: "LaPEIA — ECT/UFRN",
  description: "Laboratório de Pesquisa, Extensão e Inovação em Astronomia da ECT/UFRN.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

// A página institucional não depende de dados por requisição e pode ser
// pré-gerada para a versão estática do GitHub Pages.
export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
