"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, GitFork, Star, MessageSquare, Heart } from "lucide-react";
import Link from "next/link";

const SAMPLE_PACKAGES = [
  {
    id: 1,
    name: "express-utils",
    description: "Utility functions for Express.js applications. Looking for maintainers to help with documentation and new features.",
    downloads: "2.1M",
    stars: 1200,
    forks: 150,
    tags: ["express", "nodejs", "utilities"],
    status: "needs-maintainer",
    category: "Utilities",
    posts: 24,
    likes: 156
  },
  {
    id: 2,
    name: "react-data-grid",
    description: "A fast and extensible data grid for React. Seeking contributors for bug fixes and performance improvements.",
    downloads: "500K",
    stars: 800,
    forks: 120,
    tags: ["react", "grid", "data"],
    status: "active",
    category: "UI Libraries",
    posts: 18,
    likes: 89
  }
];

export function PackageGrid() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {SAMPLE_PACKAGES.map((pkg) => (
        <Card key={pkg.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold hover:text-primary">
                  <Link href={`/packages/${pkg.id}`}>{pkg.name}</Link>
                </CardTitle>
                <Badge variant="outline">{pkg.category}</Badge>
              </div>
              <Badge
                variant={pkg.status === "needs-maintainer" ? "destructive" : pkg.status === "unmaintained" ? "secondary" : "default"}
              >
                {pkg.status === "needs-maintainer" ? "Needs Maintainer" : 
                 pkg.status === "unmaintained" ? "Unmaintained" : "Active"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{pkg.description}</p>
            <div className="flex flex-wrap gap-2">
              {pkg.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  {pkg.downloads}
                </span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  {pkg.stars}
                </span>
                <span className="flex items-center">
                  <GitFork className="h-4 w-4 mr-1" />
                  {pkg.forks}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {pkg.posts}
                </span>
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  {pkg.likes}
                </span>
              </div>
              <Link href={`/packages/${pkg.id}`}>
                <Button variant="outline" size="sm">View Details</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}