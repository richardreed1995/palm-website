import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Last updated: 12 December 2024</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Privacy Policy</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">How we collect, use, and protect your information</div>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <h2>Introduction</h2>
            <p>Palm ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website palmb2b.com and use our services.</p>
            
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Register for our services</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Company information (company name, job title, industry)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information when you visit our website:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Date and time of visits</li>
              <li>Cookie and similar technology data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our services</li>
              <li>Process and respond to your enquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyse usage patterns and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and security threats</li>
            </ul>

            <h2>Legal Basis for Processing (UK GDPR)</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Consent:</b> Where you have given clear consent for us to process your personal data for specific purposes</li>
              <li><b>Contract:</b> Where processing is necessary for the performance of a contract with you</li>
              <li><b>Legal obligation:</b> Where we need to comply with legal requirements</li>
              <li><b>Legitimate interests:</b> Where we have a legitimate business interest, provided this doesn't override your rights</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <h3>Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website hosting and maintenance</li>
              <li>Email marketing services</li>
              <li>Analytics and reporting</li>
              <li>Customer support</li>
              <li>Payment processing</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests from public authorities.</p>

            <h3>Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

            <h2>Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Specifically:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Contact information:</b> Retained whilst you remain a client or prospect</li>
              <li><b>Marketing communications:</b> Until you unsubscribe</li>
              <li><b>Website analytics:</b> Anonymised after 26 months</li>
              <li><b>Legal records:</b> As required by applicable law</li>
            </ul>

            <h2>Your Rights</h2>
            <p>Under UK data protection law, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Access:</b> Request a copy of the personal data we hold about you</li>
              <li><b>Rectification:</b> Request correction of inaccurate or incomplete data</li>
              <li><b>Erasure:</b> Request deletion of your personal data in certain circumstances</li>
              <li><b>Restriction:</b> Request restriction of processing in certain circumstances</li>
              <li><b>Portability:</b> Request transfer of your data to another organisation</li>
              <li><b>Objection:</b> Object to processing based on legitimate interests or for marketing purposes</li>
              <li><b>Withdraw consent:</b> Where processing is based on consent</li>
            </ul>
            <p>To exercise these rights, please contact us at richard@palmb2b.com.</p>

            <h2>International Transfers</h2>
            <p>We primarily process data within the UK. If we transfer data internationally, we ensure appropriate safeguards are in place, such as adequacy decisions or standard contractual clauses.</p>

            <h2>Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

            <h2>Children's Privacy</h2>
            <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.</p>

            <h2>Contact Information</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><b>Email:</b> richard@palmb2b.com</p>
              <p><b>Website:</b> palmb2b.com</p>
            </div>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
