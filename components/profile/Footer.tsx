import { Camera, MessageCircle, Orbit, Rss, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const mainLinks = ["О нас", "Поддержка", "Блог", "Вакансии"];
const legalLinks = ["Конфиденциальность", "Условия использования"];

const socials = [
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "Чат" },
  { icon: Camera, label: "Фото" },
  { icon: Rss, label: "Лента" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-6 text-sm lg:flex-row lg:justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <Orbit className="size-5 text-primary" />
          <span>© 2026 Мой профиль. Все права защищены.</span>
        </div>

        <Separator orientation="vertical" className="hidden h-5 lg:block" />

        <nav className="flex flex-wrap justify-center gap-4">
          {mainLinks.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </nav>

        <Separator orientation="vertical" className="hidden h-5 lg:block" />

        <nav className="flex flex-wrap justify-center gap-4 text-muted-foreground">
          {legalLinks.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="text-muted-foreground transition hover:text-foreground"
            >
              <social.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}