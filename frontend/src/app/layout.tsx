import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUMZ by Lunaris | Sites Web Pro au Luxembourg",
  description:
    "Création de sites internet modernes et abordables par votre voisin informaticien.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        {/* On retire la Navbar d'ici car elle a besoin de l'état global de la langue */}
        {children}
      </body>
    </html>
  );
}
