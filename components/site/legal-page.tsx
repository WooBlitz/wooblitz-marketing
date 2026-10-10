import Link from "next/link";

import Logo from "@/assets/logo/logo";

type Section = {
  heading: string;
  body: string[];
  /** Optional bullet list rendered under the paragraph block. */
  items?: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

/**
 * Shared shell for the /terms and /privacy pages.
 *
 * Deliberately plain: a header, a back link, and readable prose. These are
 * static pages and must not pull the landing page's client components in.
 */
const LegalPage = ({ title, updated, intro, sections }: LegalPageProps) => {
  return (
    <div className="min-h-svh flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" aria-label="Wooblitz home">
              <Logo />
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 py-14 md:py-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map(({ heading, body, items }) => (
              <section key={heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-medium tracking-tight">{heading}</h2>
                {body.map((paragraph, i) => (
                  <p key={i} className="text-base text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {items ? (
                  <ul className="flex flex-col gap-2 pl-1">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="text-base text-muted-foreground leading-relaxed list-disc pl-5 marker:text-muted-foreground/60"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-muted p-6 md:p-8 flex flex-col gap-3">
            <h2 className="text-lg font-medium">Questions about this?</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Email{" "}
              <a
                href="mailto:hello@wooblitz.com"
                className="text-foreground underline underline-offset-4"
              >
                hello@wooblitz.com
              </a>{" "}
              and a founder will get back to you.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="py-6 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm text-muted-foreground">
              © 2026 Wooblitz. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;