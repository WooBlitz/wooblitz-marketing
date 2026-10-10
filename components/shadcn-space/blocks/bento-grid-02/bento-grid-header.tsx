import { Badge } from "@/components/ui/badge";

export function BentoGridHeader() {
  return (
    <div className="flex flex-col items-start gap-6">
      <Badge variant="outline" className="h-auto px-3 py-1 text-sm font-normal">
        Multi-store by default
      </Badge>
      <h2 className="w-full max-w-3xl text-4xl font-medium text-foreground md:text-5xl">
        One backend, every storefront.
      </h2>
    </div>
  );
}
