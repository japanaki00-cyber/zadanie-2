import { Bookmark, FileText, Image as ImageIcon, LayoutGrid } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    value: "all",
    label: "Все посты",
    icon: LayoutGrid,
    items: [
      "Как я перешёл с CSS на Tailwind",
      "Пять правил аккуратной вёрстки",
      "Мой рабочий процесс в Next.js",
    ],
  },
  {
    value: "media",
    label: "Медиа",
    icon: ImageIcon,
    items: [
      "Скриншот нового дизайна главной",
      "Фото рабочего места",
      "Запись доклада о компонентах",
    ],
  },
  {
    value: "docs",
    label: "Документы",
    icon: FileText,
    items: [
      "Резюме (PDF)",
      "Гайд по структуре проекта",
      "Чек-лист перед релизом",
    ],
  },
  {
    value: "favorites",
    label: "Избранное",
    icon: Bookmark,
    items: [
      "Статья про доступность интерфейсов",
      "Подборка иконок и шрифтов",
      "Разбор паттернов React",
    ],
  },
];

export default function ContentTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 sm:grid-cols-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="gap-2">
            <tab.icon className="size-4" />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="space-y-3">
          {tab.items.map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center gap-3">
                <tab.icon className="size-5 text-muted-foreground" />
                <span className="text-sm font-medium">{item}</span>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}