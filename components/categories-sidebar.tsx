"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Box, Code2, Database, Layout, Palette, Shield, Wand2, Zap } from "lucide-react";

const categories = [
  { name: "All Packages", icon: Box, count: 2891 },
  { name: "UI Libraries", icon: Layout, count: 642 },
  { name: "Utilities", icon: Wand2, count: 891 },
  { name: "State Management", icon: Database, count: 234 },
  { name: "Security", icon: Shield, count: 156 },
  { name: "Performance", icon: Zap, count: 321 },
  { name: "Styling", icon: Palette, count: 445 },
  { name: "Developer Tools", icon: Code2, count: 567 }
];

export function CategoriesSidebar() {
  return (
    <div className="w-[240px] flex flex-col">
      <div className="font-semibold text-lg px-4 py-4">Categories</div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2 font-normal hover:bg-muted",
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1 text-left">{category.name}</span>
                <span className="text-muted-foreground text-sm">
                  {category.count}
                </span>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}