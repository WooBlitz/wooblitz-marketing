import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const avatars = [
  { src: "", alt: "founder", fallback: "MH" },
  { src: "", alt: "engineering", fallback: "EN" },
  { src: "", alt: "agents", fallback: "AG" },
  { src: "", alt: "support", fallback: "CX" },
];

const FAQ_DATA = [
  {
    question: "Is Wooblitz really a Shopify alternative?",
    answer:
      "Yes. Wooblitz is one connected commerce platform where the storefront, back office, support and lifecycle tools all read and write the same data. You get full control of your storefront and your customer records — without an agency invoice in the middle or a tax on every extra store you open.",
  },
  {
    question: "Do I need to write code to use it?",
    answer:
      "No. The chat builder and catalog agent are built so a merchant can ship a storefront, load SKUs, and answer support questions by describing what they want. If you do write code, the platform exposes the same storefront and commerce primitives underneath — nothing is locked away behind the chat interface.",
  },
  {
    question: "How does running many stores actually work?",
    answer:
      "Every store runs on one deployment, each with its own catalogue, dashboard, brand kit and customer base. Store data is isolated per store by default, so one store can never read another store's customers, orders or revenue.",
  },
  {
    question: "What about payments, taxes, and shipping?",
    answer:
      "Payments are wired in out of the box, including card wallets and subscriptions. Tax regions, shipping options and returns are handled in the same place as the rest of your catalogue. You can connect your own payment account or run it through ours.",
  },
  {
    question: "How long does it really take to launch a store?",
    answer:
      "Most founding stores go from signup to first paid order in under 48 hours. The chat builder drafts your storefront, the catalog agent fills in products from a CSV, and checkout goes live as soon as you flip the switch.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col md:gap-16 gap-8">
        <div>
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <Badge
              variant="outline"
              className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
            >
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-5xl not-last:md:text-5xl font-medium max-w-lg">
              Answers from the team building it
            </h2>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-6">
          <div className="max-w-sm w-full">
            <div className="md:px-8 px-6 md:py-10 py-8 rounded-2xl border space-y-8">
              <div className="space-y-6!">
                <h4 className="text-2xl font-medium text-foreground">
                  Still have questions? Ask us directly.
                </h4>
                <AvatarGroup>
                  {avatars.map((avatar, index) => (
                    <Avatar key={index} className="h-12 w-12">
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </div>
              <div className="space-y-3!">
                <Button className="flex gap-2 items-center w-full rounded-full min-h-12 cursor-pointer">
                  <Calendar className="size-4.5" />
                  Book an onboarding call
                </Button>
                <Button
                  variant="outline"
                  className="flex gap-2 items-center w-full rounded-full min-h-12 cursor-pointer"
                >
                  <Mail className="size-4.5" />
                  Email the founders
                </Button>
              </div>
            </div>
          </div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "md:px-8 px-4 py-6 border border-border rounded-2xl flex flex-col gap-4 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 md:text-xl text-lg font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  <div className="flex xl:gap-16 gap-6">
                    {/* Number */}
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {faq.question}
                  </div>

                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden" />
                  <MinusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 hidden group-aria-expanded/accordion-trigger:inline" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-lg lg:max-w-2xl mx-auto xl:px-15 md:px-12 px-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
