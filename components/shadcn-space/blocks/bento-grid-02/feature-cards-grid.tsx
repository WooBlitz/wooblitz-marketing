import {
  CollaborationPreview,
  SmartWorkspacePreview,
  VoiceAssistantPreview,
} from "@/components/shadcn-space/blocks/bento-grid-02/feature-previews";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Chat-First Builder",
    description:
      "Describe your store, get a working storefront — blocks, copy, checkout. Approve or tweak, ship the same day.",
    preview: <SmartWorkspacePreview />,
  },
  {
    title: "Multi-Store",
    description:
      "One platform, many stores. Every store gets its own dashboard, brand kit and customer base — and opening the next one costs nothing extra.",
    preview: <CollaborationPreview />,
  },
  {
    title: "Catalog Agent",
    description:
      "Ask your catalog anything: what sold last week, rewrite this description in my brand voice, add these 30 SKUs.",
    preview: <VoiceAssistantPreview />,
  },
];

export function FeatureCardsGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex h-75 flex-col overflow-hidden rounded-xl border border-border bg-muted py-0 gap-0 shadow-none ring-0"
          >
            <div className="relative flex flex-1 items-center justify-center overflow-hidden">
              {feature.preview}
            </div>
            <CardHeader className="flex flex-col gap-2 lg:gap-0.5 p-5 sm:p-6 pt-0 sm:pt-0 pb-5 sm:pb-6">
              <CardTitle className="text-lg font-medium text-foreground">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-normal">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
