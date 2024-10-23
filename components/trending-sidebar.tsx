"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp } from "lucide-react";

const trendingPackages = [
  {
    name: "next-auth",
    downloads: "1.2M",
    trend: "+23%"
  },
  {
    name: "react-query",
    downloads: "892K",
    trend: "+15%"
  },
  {
    name: "tailwind-merge",
    downloads: "456K",
    trend: "+42%"
  }
];

export function TrendingSidebar() {
  return (
    <div className="w-[280px] space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Packages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trendingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="font-medium">{pkg.name}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download className="mr-1 h-4 w-4" />
                    {pkg.downloads}/week
                  </div>
                </div>
                <Badge variant="secondary" className="ml-auto">
                  {pkg.trend}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Packages</span>
              <span className="font-medium">5,147</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Need Maintainers</span>
              <span className="font-medium">892</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Projects</span>
              <span className="font-medium">3,245</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}