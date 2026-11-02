import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/profile/Footer";

export const metadata: Metadata = {
  title: "Мой Профиль",
  description: "Страница профиля на Next.js, Tailwind и shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}