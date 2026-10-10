import LegalPage from "@/components/site/legal-page";

const sections = [
  {
    heading: "1. Agreement to these terms",
    body: [
      "These Terms of Service (\"Terms\") form a binding agreement between you and Wooblitz (\"Wooblitz\", \"we\", \"us\") covering your use of the Wooblitz platform, including the storefront builder, commerce backend, support tooling and lifecycle tools we make available to you (together, the \"Services\").",
      "By creating an account, accepting a trial, or otherwise using the Services you agree to these Terms. If you are agreeing on behalf of a company, you confirm you have authority to bind that company, and \"you\" means that company.",
    ],
  },
  {
    heading: "2. Closed beta",
    body: [
      "Wooblitz is currently in closed beta. Access is granted by invitation and is not available for general purchase. Beta access is a working relationship, not a finished product: features may be added, changed, paused or removed, and we may change or discontinue any part of the Services at any time.",
      "Where a feature is still being built we will say so rather than ship something that looks finished and is not. We ask that you tell us what breaks — early feedback is the main thing we get out of the beta.",
    ],
  },
  {
    heading: "3. Your account",
    body: [
      "You are responsible for the accuracy of the information you provide, for keeping your credentials confidential, and for all activity that happens under your account. Tell us promptly if you believe your account has been accessed without your permission.",
      "You must be at least 18 years old and legally able to enter into a binding contract to use the Services.",
    ],
  },
  {
    heading: "4. Your content and data",
    body: [
      "You keep all ownership of the content you upload to the Services — your products, images, copy, customer records, order history and anything else you bring in. We claim no ownership over it.",
      "You grant us a limited, non-exclusive licence to host, process, transmit and display your content only as needed to operate the Services for you. That licence ends when you delete the content or close your account, except for copies we must retain for legal or fraud-prevention reasons.",
      "You are responsible for having the rights necessary to upload what you upload, and for anything you do with your store. We do not review your content and we do not claim ownership of the products you sell.",
    ],
  },
  {
    heading: "5. Acceptable use",
    body: [
      "You agree not to use the Services to break the law, to infringe anyone else's rights, or to operate a store that sells prohibited, counterfeit or stolen goods. You also agree not to probe, scan or test the vulnerability of the Services without our written permission, and not to resell, sublicense or provide the Services to a third party as a standalone offering.",
      "We may suspend or terminate an account that puts the platform, other stores, or our infrastructure at risk.",
    ],
  },
  {
    heading: "6. Fees, trials and cancellation",
    body: [
      "Paid plans are billed in advance on a monthly or annual basis, and renew automatically until cancelled. Fees exclude any taxes we are required to collect, which we will add at checkout.",
      "You can cancel at any time from your account settings. Cancellation takes effect at the end of the current billing period, and we do not pro-rate partial months. Fees already paid for the current period are non-refundable except where we have failed to deliver the Services or as required by law.",
      "Founding stores in the closed beta may have pricing locked for the life of the beta. That pricing is a commitment from us and does not carry forward to a future public plan unless we say so in writing.",
    ],
  },
  {
    heading: "7. Payments and payouts",
    body: [
      "Payments are processed through our payment partners. You are responsible for the accuracy of the details you provide, for chargebacks raised against your store, and for any disputes with your own customers about money.",
      "Where we act as the merchant of record or hold funds on your behalf, we will set out the applicable arrangement in your store settings before you take live payments.",
    ],
  },
  {
    heading: "8. Third-party services",
    body: [
      "The Services link to third-party services that we do not control — payment processors, email delivery, and similar providers. Your use of those services is governed by their own terms, and we are not responsible for their availability, accuracy or conduct.",
    ],
  },
  {
    heading: "9. Confidentiality",
    body: [
      "Each of us may receive information from the other that is marked confidential or that reasonably should be treated as confidential. The receiving party will use it only to perform this agreement, will protect it with reasonable care, and will not disclose it except to people who need it to do their job or as the law requires.",
    ],
  },
  {
    heading: "10. Intellectual property",
    body: [
      "We own the Services themselves, including the software, design, brand and documentation. We do not own your content. Feedback you send us may be used to improve the Services without obligation to you.",
    ],
  },
  {
    heading: "11. Warranties and disclaimers",
    body: [
      "The Services are provided on an \"as is\" and \"as available\" basis during the closed beta. To the fullest extent permitted by law we disclaim all implied warranties, including merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or that data will never be lost.",
      "Nothing in these Terms excludes liability that cannot lawfully be excluded, including for fraud or for death or personal injury caused by negligence.",
    ],
  },
  {
    heading: "12. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, neither of us is liable for indirect, incidental, special or consequential losses, or for lost profits, revenue, data or goodwill. Each party's total liability under these Terms is limited to the greater of the fees you paid us in the twelve months before the claim arose, or one hundred US dollars.",
    ],
  },
  {
    heading: "13. Indemnity",
    body: [
      "You agree to defend and indemnify us against claims arising from your content, your store, your use of the Services in breach of these Terms, or your violation of any third-party right.",
    ],
  },
  {
    heading: "14. Term and termination",
    body: [
      "These Terms apply until you close your account or we terminate it. We may terminate with notice where required by law, or immediately where continued use would put the platform or other stores at risk. On termination you may export your data for thirty days, after which we may delete it in line with our retention practices.",
    ],
  },
  {
    heading: "15. Changes to these Terms",
    body: [
      "We may update these Terms as the product changes. We will post the updated version here and change the \"Last updated\" date. If a change is material we will tell you by email before it takes effect. Continuing to use the Services after that means you accept the updated Terms.",
    ],
  },
  {
    heading: "16. Governing law",
    body: [
      "These Terms are governed by the laws of England and Wales, without regard to conflict-of-law rules. The courts of England and Wales have exclusive jurisdiction, and both parties submit to that jurisdiction.",
    ],
  },
];

const TermsPage = () => {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 October 2026"
      intro="These terms cover your use of Wooblitz during the closed beta. They are written to be read — if anything here is unclear, email us and we will explain it plainly."
      sections={sections}
    />
  );
};

export default TermsPage;