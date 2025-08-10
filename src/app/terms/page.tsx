import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Last updated: 12 December 2024</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Terms of Service</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">The terms and conditions for using our services</div>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <h2>Agreement to Terms</h2>
            <p>By accessing and using the Palm website (palmb2b.com) and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2>Description of Services</h2>
            <p>Palm provides business automation and process optimisation services to B2B service businesses, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process analysis and documentation</li>
              <li>Automation system design and implementation</li>
              <li>Workflow optimisation</li>
              <li>Team training and support</li>
              <li>Ongoing system maintenance and improvement</li>
            </ul>

            <h2>Use of Services</h2>
            <h3>Permitted Use</h3>
            <p>You may use our services for lawful business purposes only. You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorised use</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our services to transmit harmful or malicious content</li>
            </ul>

            <h2>Intellectual Property</h2>
            <h3>Our Content</h3>
            <p>All content on our website, including text, graphics, logos, images, and software, is the property of Palm and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
            
            <h3>Your Content</h3>
            <p>You retain ownership of any content you provide to us. By sharing content with us, you grant us a licence to use, modify, and display that content solely for the purpose of providing our services.</p>

            <h2>Service Availability</h2>
            <p>We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Modify or discontinue services with reasonable notice</li>
              <li>Perform maintenance that may temporarily affect availability</li>
              <li>Suspend access for security or legal reasons</li>
            </ul>

            <h2>Payment Terms</h2>
            <h3>Fees</h3>
            <p>Service fees are as agreed in your service agreement. All fees are exclusive of VAT unless otherwise stated.</p>
            
            <h3>Payment</h3>
            <p>Payment is due according to the terms specified in your service agreement. Late payment may result in service suspension.</p>
            
            <h3>Refunds</h3>
            <p>Refund policies are specified in individual service agreements.</p>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Palm's liability is limited to the amount you paid for our services in the 12 months preceding the claim. We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from third-party services or content</li>
            </ul>

            <h2>Indemnification</h2>
            <p>You agree to indemnify and hold Palm harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>

            <h2>Privacy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy, which governs how we collect and use your information.</p>

            <h2>Termination</h2>
            <p>Either party may terminate the service relationship with reasonable notice as specified in the service agreement. Upon termination:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your access to our services will cease</li>
              <li>We will return or destroy your confidential information as requested</li>
              <li>Accrued obligations will survive termination</li>
            </ul>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>Changes to Terms</h2>
            <p>We may update these terms from time to time. We will notify you of material changes and post the updated terms on our website.</p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
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
