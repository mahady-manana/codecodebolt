import { PackageGrid } from '@/components/package-grid';
import { Button } from '@/components/ui/button';
import { CategoriesSidebar } from '@/components/categories-sidebar';
import { TrendingSidebar } from '@/components/trending-sidebar';
import { Github, Package } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Find and Support NPM Packages
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Connect with package maintainers, discover projects that need help, and contribute to the open-source community.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/packages/new">
            <Button size="lg">
              <Package className="mr-2 h-5 w-5" />
              List Your Package
            </Button>
          </Link>
          <Link href="https://github.com">
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </section>

      <div className="flex gap-8">
        <div className="hidden lg:block">
          <CategoriesSidebar />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-8">Featured Packages</h2>
          <PackageGrid />
        </div>
        <div className="hidden xl:block">
          <TrendingSidebar />
        </div>
      </div>
    </div>
  );
}