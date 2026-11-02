import { FileText, Heart, UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Публикации", value: "67", icon: FileText },
  { label: "Подписчики", value: "12,4K", icon: Users },
  { label: "Подписки", value: "12", icon: UserPlus },
  { label: "Лайки", value: "58,9K", icon: Heart },
];

export default function StatsBlock() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex flex-col items-center gap-1 text-center">
            <stat.icon className="size-6 text-primary" />
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}