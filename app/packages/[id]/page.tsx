"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, GitFork, Star, MessageSquare, Heart, Share2, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PackagePage({ params }: { params: { id: string } }) {
  const [newPost, setNewPost] = useState("");

  const package_details = {
    id: params.id,
    name: "express-utils",
    description: "Utility functions for Express.js applications. Looking for maintainers to help with documentation and new features. This package provides a comprehensive set of utilities that make working with Express.js easier and more efficient.",
    downloads: "2.1M",
    stars: 1200,
    forks: 150,
    contributors: 45,
    members: 128,
    tags: ["express", "nodejs", "utilities"],
    status: "needs-maintainer",
    category: "Utilities",
    posts: [
      {
        id: 1,
        author: {
          name: "Sarah Chen",
          username: "sarahc",
          avatar: "https://github.com/shadcn.png"
        },
        content: "Just implemented error handling middleware. Looking for review!",
        likes: 24,
        comments: 8,
        timestamp: "2h ago"
      },
      {
        id: 2,
        author: {
          name: "Alex Kumar",
          username: "alexk",
          avatar: "https://github.com/shadcn.png"
        },
        content: "Working on improving the documentation. Any suggestions welcome!",
        likes: 15,
        comments: 5,
        timestamp: "5h ago"
      }
    ]
  };

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">{package_details.name}</CardTitle>
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">{package_details.category}</Badge>
                <Badge variant="secondary">{package_details.status}</Badge>
              </div>
            </div>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          
          <p className="text-muted-foreground">{package_details.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Download className="h-5 w-5 mb-1" />
              <span className="font-semibold">{package_details.downloads}</span>
              <span className="text-sm text-muted-foreground">Downloads</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Star className="h-5 w-5 mb-1" />
              <span className="font-semibold">{package_details.stars}</span>
              <span className="text-sm text-muted-foreground">Stars</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Users className="h-5 w-5 mb-1" />
              <span className="font-semibold">{package_details.contributors}</span>
              <span className="text-sm text-muted-foreground">Contributors</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <GitFork className="h-5 w-5 mb-1" />
              <span className="font-semibold">{package_details.members}</span>
              <span className="text-sm text-muted-foreground">Members</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <Textarea
                    placeholder="Share your thoughts or updates..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="mb-4"
                  />
                  <Button>Post Update</Button>
                </CardContent>
              </Card>

              {package_details.posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">{post.author.name}</p>
                            <p className="text-sm text-muted-foreground">@{post.author.username}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                        </div>
                        <p className="mt-2">{post.content}</p>
                        <div className="flex gap-4 mt-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}