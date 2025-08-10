import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Last updated: 12 December 2024</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Cookie Policy</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">How we use cookies to improve your experience</div>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience and allow us to analyse how our website is used.</p>
            
            <h2>Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for our website to function properly. They enable basic functions like page navigation and access to secure areas. Our website cannot function properly without these cookies.</p>
            <p>Examples include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Session management cookies</li>
              <li>Security cookies</li>
              <li>Load balancing cookies</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience.</p>
            <p>We use:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Analytics to analyse website traffic and user behaviour</li>
              <li>These cookies collect anonymous information about pages visited, time spent, and user journey</li>
            </ul>

            <h3>Marketing Cookies</h3>
            <p>With your consent, we may use marketing cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Show you relevant advertising</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
              <li>Personalise your experience on our website</li>
            </ul>

            <h3>Functional Cookies</h3>
            <p>These cookies enhance the functionality of our website by remembering your preferences and choices.</p>
            <p>Examples include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Language preferences</li>
              <li>Region selection</li>
              <li>Customised content preferences</li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>We may use third-party services that place cookies on your device:</p>
            
            <h3>Google Analytics</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Purpose:</b> Website analytics and performance measurement</li>
              <li><b>Data collected:</b> Anonymous usage statistics</li>
              <li><b>Privacy policy:</b> Google Analytics Privacy Policy</li>
            </ul>

            <h3>Marketing Platforms</h3>
            <p>We may use marketing platforms that place cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Track conversions from our advertising</li>
              <li>Retarget website visitors</li>
              <li>Measure campaign effectiveness</li>
            </ul>

            <h2>Managing Your Cookie Preferences</h2>
            <h3>Browser Settings</h3>
            <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>View what cookies are stored</li>
              <li>Delete existing cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies (though this may affect website functionality)</li>
            </ul>

            <h3>Our Cookie Banner</h3>
            <p>When you first visit our website, you'll see a cookie banner where you can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customise your cookie preferences</li>
            </ul>

            <h3>Opting Out of Analytics</h3>
            <p>You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>

            <h2>Cookie Retention</h2>
            <p>Different cookies have different retention periods:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Session cookies:</b> Deleted when you close your browser</li>
              <li><b>Persistent cookies:</b> Remain for a set period (typically 1-24 months)</li>
              <li><b>Analytics cookies:</b> Usually retained for 26 months</li>
              <li><b>Marketing cookies:</b> Retention varies by platform (typically 30 days to 2 years)</li>
            </ul>

            <h2>Changes to Our Cookie Policy</h2>
            <p>We may update this Cookie Policy to reflect changes in our practices or for legal reasons. We will post any changes on this page and update the "Last updated" date.</p>

            <h2>Your Rights</h2>
            <p>Under UK data protection law, you have rights regarding cookies that collect personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to withdraw consent</li>
              <li>Right to access information about cookies</li>
              <li>Right to request deletion of cookie data</li>
            </ul>

            <h2>Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><b>Email:</b> richard@palmb2b.com</p>
              <p><b>Website:</b> palmb2b.com</p>
            </div>

            <h2>Technical Information</h2>
            <h3>Cookie Details</h3>
            <p>For technical details about specific cookies we use, including their names, purposes, and retention periods, please contact us at richard@palmb2b.com.</p>

            <h3>Updates and Notifications</h3>
            <p>We will notify you of significant changes to our cookie practices through our website or by email if you have subscribed to our communications.</p>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
