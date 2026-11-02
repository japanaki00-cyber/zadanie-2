import { AtSign, CalendarDays, Globe, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Figma",
  "Git",
];

const contacts = [
  { icon: Mail, label: "japanaki00@gmail.com" },
  { icon: Globe, label: "website.dev" },
  { icon: AtSign, label: "@TGdima" },
  { icon: CalendarDays, label: "На платформе с января 2026" },
];

export default function AboutSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">О себе</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            Я занимаюсь веб-разработкой около года. Начинал с вёрстки на
            HTML и CSS, затем освоил React и Next.js. Сейчас делаю
            интерфейсы для небольших студий и стартапов.
          </p>
          <p>
            В работе ценю простоту, читаемый код и внимание к деталям. В
            свободное время изучаю дизайн, читаю про UX и веду небольшой блог о
            разработке.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Навыки</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Контакты</h3>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            {contacts.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <item.icon className="size-4 text-muted-foreground" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}