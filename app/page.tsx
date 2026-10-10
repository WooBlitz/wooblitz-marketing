import AnnouncementBar from "@/components/shadcn-space/blocks/announcement-bar-03/announcement-bar";
import Bentogrid from "@/components/shadcn-space/blocks/bento-grid-02";
import Contact from "@/components/shadcn-space/blocks/contact-06/contact";
import Faq from "@/components/shadcn-space/blocks/faq-04/faq";
import Feature from "@/components/shadcn-space/blocks/feature-24/feature";
import Footer from "@/components/shadcn-space/blocks/footer-07/footer";
import HeroSection from "@/components/shadcn-space/blocks/hero-18/hero";
import NavbarBlock from "@/components/shadcn-space/blocks/navbar-04";
import Pricing from "@/components/shadcn-space/blocks/pricing-09/pricing";

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "features", Component: Feature },
  { id: "workspace", Component: Bentogrid },
  { id: "pricing", Component: Pricing },
  { id: "faq", Component: Faq },
  { id: "contact", Component: Contact },
];

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <AnnouncementBar />
      <NavbarBlock />
      <main className="flex-1">
        {sections.map(({ id, Component }) => (
          <section key={id} id={id} className="scroll-mt-16">
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}