import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Internacional de Psicología",
  description: "Psicología online para tu bienestar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}