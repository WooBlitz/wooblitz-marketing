import LegalPage from "@/components/site/legal-page";

const sections = [
  {
    heading: "1. The short version",
    body: [
      "We collect what we need to run your store and nothing we don't. We do not sell your data, we do not buy it, and we do not use your customers' data to train models for anyone else. Where we are required to process personal data on someone's behalf, we do it only on your instructions.",
    ],
  },
  {
    heading: "2. Who this applies to",
    body: [
      "This policy explains how Wooblitz handles personal data when you use our platform, when you apply for beta access, and when you run a store on Wooblitz. It covers data about you, and personal data about your customers that passes through our systems.",
    ],
  },
  {
    heading: "3. Data we collect",
    body: [
      "We collect information in three broad groups:",
    ],
    items: [
      "Account data — your name, email address, store details, billing information and anything else you give us when you apply for or use beta access.",
      "Store data — the products, orders, customers, conversations and marketing records that you and your staff enter into the platform so we can run the store for you.",
      "Technical data — IP address, browser and device type, pages visited, timestamps and diagnostic logs, collected to keep the service secure and to find bugs.",
    ],
  },
  {
    heading: "4. How we use it",
    body: [
      "We use personal data to provide and support the Services, to take payment, to communicate with you about your account or the beta, to keep the platform secure, and to understand which parts of the product are working.",
      "We do not use your store's customer data for advertising. We do not sell personal data to anyone. We do not use customer data to train models for third parties.",
    ],
  },
  {
    heading: "5. Legal bases",
    body: [
      "Where the GDPR or the UK GDPR applies, we rely on the following bases: performance of a contract to provide the Services you asked for; our legitimate interests in operating, securing and improving the platform; your consent where we ask for it, such as non-essential analytics or marketing email; and compliance with legal obligation where the law requires us to keep something.",
    ],
  },
  {
    heading: "6. Sharing",
    body: [
      "We share personal data only with service providers who help us operate the platform — hosting, payment processing, email delivery and error monitoring — and only to the extent needed for them to do that work. They are contractually required to protect it and are not allowed to use it for their own purposes.",
      "We may disclose data if we are legally required to, or in connection with a genuine and imminent threat to the security of the service or its users. We do not disclose data to advertisers or data brokers.",
    ],
  },
  {
    heading: "7. International transfers",
    body: [
      "Our infrastructure runs in several countries. Where personal data is transferred outside the UK or EEA, we use recognised safeguards such as adequacy decisions or standard contractual clauses, and we keep transfers limited to what the service needs.",
    ],
  },
  {
    heading: "8. Retention",
    body: [
      "We keep account data for as long as your account is open. When you close an account we hold your data for up to thirty days so you can export it, then delete it from our live systems. Some records — invoices, for example — are kept longer where tax or accounting law requires it. Security logs are retained for a limited period and then deleted.",
    ],
  },
  {
    heading: "9. Your rights",
    body: [
      "Where the GDPR or the UK GDPR applies, you have the right to access your personal data, correct it, delete it, restrict or object to how we use it, and receive it in a portable format. You can do most of this yourself from your account settings — for anything else, email us and we will action it.",
      "You can withdraw consent at any time where we rely on it, without affecting anything done before. You also have the right to complain to your local data protection authority.",
    ],
  },
  {
    heading: "10. Cookies",
    body: [
      "We use cookies and similar storage that are necessary to keep you signed in and to remember settings such as your theme. These cannot be switched off without breaking parts of the site. Any optional analytics or marketing cookies are off until you choose to allow them, and you can change your mind at any time.",
    ],
  },
  {
    heading: "11. Security",
    body: [
      "We encrypt data in transit and at rest, isolate each store's data from every other store, restrict employee access on a need-to-know basis, and log access to administrative tooling. No system is perfectly secure, but we treat a breach as an incident to be contained and disclosed promptly, not a footnote.",
    ],
  },
  {
    heading: "12. Children",
    body: [
      "The Services are not intended for anyone under 18. We do not knowingly collect personal data from children. If you believe a child has given us data, contact us and we will delete it.",
    ],
  },
  {
    heading: "13. Changes to this policy",
    body: [
      "We may update this policy as the product changes. We will post the updated version here and change the \"Last updated\" date. If a change materially affects how we handle your data we will email you before it takes effect.",
    ],
  },
  {
    heading: "14. Contact",
    body: [
      "For any privacy question, or to exercise a right, email hello@wooblitz.com. You can also write to us at Wooblitz, and we will respond as soon as we reasonably can.",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 October 2026"
      intro="What we collect, why we collect it, and what we deliberately do not do with it. Written to be read rather than to be skimmed past."
      sections={sections}
    />
  );
};

export default PrivacyPage;