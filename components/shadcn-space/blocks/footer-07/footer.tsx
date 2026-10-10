import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";

type FooterLink = {
  title: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#footer-linkedin-clip)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="footer-linkedin-clip">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const LINKEDIN_URL = "https://www.linkedin.com/company/wooblitz/";

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { title: "Chat Builder", href: "#hero" },
      { title: "Catalog Agent", href: "#features" },
      { title: "Multi-Store", href: "#workspace" },
      { title: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "FAQs", href: "#faq" },
      { title: "Request access", href: "#contact" },
      { title: "Contact", href: "mailto:hello@wooblitz.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border flex flex-col gap-8 sm:gap-12">
          <div className="lg:pt-20 sm:pt-16 pt-8 px-8 lg:px-12 pb-8">
            <div className="relative z-10 flex flex-col gap-8 sm:gap-12">
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-5 col-span-12 flex flex-col justify-between gap-12 lg:gap-24">
                  <a href="#hero" aria-label="Wooblitz home">
                    <Logo />
                  </a>
                  <div className="flex items-center gap-4">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Wooblitz on LinkedIn"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-7 col-span-12 grid grid-cols-2 sm:grid-cols-3 gap-y-6">
                  {footerSections.map(({ title, links }) => (
                    <div key={title} className="flex flex-col gap-6">
                      <h4 className="text-base font-semibold text-foreground whitespace-nowrap">
                        {title}
                      </h4>
                      <ul className="flex flex-col gap-4">
                        {links.map(({ title: linkTitle, href }) => (
                          <li key={linkTitle}>
                            <a
                              href={href}
                              className="text-base font-normal text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
                            >
                              {linkTitle}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <Separator orientation="horizontal" />
              <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-6">
                <p className="text-base font-normal text-muted-foreground">
                  © 2026 Wooblitz. All rights reserved.
                </p>
                <p className="text-base font-normal text-muted-foreground">
                  Built for stores that outgrow their first platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;