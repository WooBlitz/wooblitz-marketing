import Image from "next/image";

import { Button } from "@/components/ui/button";
import { platforms } from "@/components/shadcn-space/blocks/bento-grid-02/platform-icons";

export function WorkspaceMockup() {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-muted grid grid-cols-12 min-h-100">
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-8 lg:gap-0 p-6 md:p-10">
          <div className="flex flex-col items-start gap-6">
            <p className="text-xl sm:text-2xl font-medium text-foreground max-w-96.25">
              Every store runs on the same deployment. Store data is
              isolated per store by default — one store can never read another
              store&apos;s customers, orders or revenue.
            </p>
            <Button className="h-8 rounded-lg px-3 text-sm font-medium hover:bg-primary/80 cursor-pointer">
              Request beta access
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-muted-foreground">One platform</p>
            <div className="flex flex-wrap items-center gap-4">
              {platforms.map(({ icon: Icon, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex items-center gap-2"
                >
                  <Icon className="size-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <Image
            src="/screenshots/dashboard.png"
            width={1780}
            height={800}
            alt="Wooblitz ecommerce dashboard: gross revenue, orders, customers, average order value and refund rate above recent sales, recent orders and the order pipeline"
            className="w-full h-auto max-h-65 md:max-h-none object-cover object-top-left md:h-full md:w-full md:object-cover block"
          />
        </div>
      </div>
    </div>
  );
}