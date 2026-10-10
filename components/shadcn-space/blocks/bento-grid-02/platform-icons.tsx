/**
 * Neutral glyphs for the product surfaces.
 *
 * These were originally third-party platform marks (Medusa, Next.js, Stripe,
 * Cloudflare) and integration logos (Dropbox, Slack, Figma). The marketing
 * site does not advertise its stack, so they were replaced with plain,
 * on-topic line icons.
 */

type IconProps = { className?: string };

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
} as const;

export const BuilderIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path
      d="M14 9.5A2.5 2.5 0 0 1 11.5 12H6l-3.5 2.5V4.5A2.5 2.5 0 0 1 5 2h6.5A2.5 2.5 0 0 1 14 4.5v5Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5h4M6 9h2.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export const CommerceIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path
      d="M1.5 2h1.7l1.6 8.2a1 1 0 0 0 1 .8h6.1a1 1 0 0 0 1-.76L14 5H3.2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6.4" cy="13.4" r="1.1" fill="currentColor" />
    <circle cx="12" cy="13.4" r="1.1" fill="currentColor" />
  </svg>
);

export const SupportIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path
      d="M14 8v1.6a2.4 2.4 0 0 1-2.4 2.4H9.8L7 14.5V12H4.4A2.4 2.4 0 0 1 2 9.6V6.4A2.4 2.4 0 0 1 4.4 4h7.2A2.4 2.4 0 0 1 14 6.4V8Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path d="M11 6 9.8 8l1.2 2L8.8 8 10 6H11Z" fill="currentColor" />
  </svg>
);

export const LifecycleIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path
      d="M13.4 8a5.4 5.4 0 1 1-1.6-3.8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M13.6 1.9v2.9h-2.9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** The four product surfaces, in the same order as the hero tabs. */
export const platforms = [
  { icon: BuilderIcon, label: "Chat Builder" },
  { icon: CommerceIcon, label: "Commerce" },
  { icon: SupportIcon, label: "Support" },
  { icon: LifecycleIcon, label: "Lifecycle" },
];

/** Neutral "connected sources" dots, used instead of integration logos. */
export const SourceDot = ({ className }: IconProps) => (
  <span className={`size-1.5 rounded-full ${className ?? "bg-muted-foreground/40"}`} />
);