"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Package, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6" />
          <span className="font-bold text-xl">MaintainHub</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xs mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search packages..."
              className="w-full pl-10"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/packages/new">
            <Button>List Package</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}