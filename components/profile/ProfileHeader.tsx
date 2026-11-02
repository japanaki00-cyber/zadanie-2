import { Pencil, Settings, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileHeader() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <Avatar className="size-28">
          <AvatarFallback className="text-3xl font-semibold">ЖД</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-3xl font-bold">Жирнов Дмитрий</h1>
            <p className="text-muted-foreground">Frontend-разработчик</p>
            <p className="text-sm text-muted-foreground">@TGdima</p>
          </div>
          <p className="max-w-xl text-sm">
            Создаю удобные и красивые веб-интерфейсы. Люблю чистый код,
            аккуратную вёрстку и хороший кофе по утрам.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <Button>
              <Pencil />
              Редактировать профиль
            </Button>
            <Button variant="outline">
              <Share2 />
              Поделиться
            </Button>
            <Button variant="outline" size="icon" aria-label="Настройки">
              <Settings />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}