import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";
import "./innovation.css";
import "./institutional.css";
import "./programs.css";

export const metadata: Metadata = {
  title: "LaPEIA — ECT/UFRN",
  description: "Laboratório de Pesquisa, Extensão e Inovação em Astronomia da ECT/UFRN.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

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
