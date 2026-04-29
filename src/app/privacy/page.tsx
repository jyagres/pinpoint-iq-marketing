import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PinpointIQ",
  description: "How PinpointIQ collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-brand-600 hover:text-brand-700 text-sm font-medium"
          >
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">Effective: April 28, 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed">
          <section>
            <p>
              PinpointIQ (&ldquo;we&rdquo;, &ldquo;our&rdquo;) is a geographic
              market intelligence tool operated by 2nd St Strategy. This policy
              explains what data we collect, why we collect it, who we share
              it with, and how long we keep it. It applies to the PinpointIQ
              web application at{" "}
              <span className="font-mono text-gray-700">app.pinpointiq.app</span>{" "}
              and the marketing site at{" "}
              <span className="font-mono text-gray-700">pinpointiq.app</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information we collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account data.</strong> Name (optional), email address,
                hashed password, organization affiliation, role, last login
                timestamp.
              </li>
              <li>
                <strong>Usage data inside the product.</strong> Saved
                dashboards, custom metrics, tags, mTAM assumptions, applied
                filters, and the metropolitan areas you query. This data is
                scoped to your organization and is used to power your views
                inside the app.
              </li>
              <li>
                <strong>Business lists you upload.</strong> CSV/Excel files
                you upload as &ldquo;business layers&rdquo; (competitor
                locations, target operators, etc.) and the geocoded results.
                This data is org-scoped — only members of your organization
                can read it.
              </li>
              <li>
                <strong>Product analytics.</strong> Anonymous-by-default
                events (page views, feature usage) sent to PostHog for product
                improvement.
              </li>
              <li>
                <strong>Error reports.</strong> Stack traces and request
                metadata sent to Sentry when something breaks, so we can fix
                bugs.
              </li>
              <li>
                <strong>Server logs.</strong> Standard request logs (IP, user
                agent, path, timestamp, response code) retained for security
                and debugging.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How we use information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide the PinpointIQ service to you and your team.</li>
              <li>
                To authenticate sign-ins, send transactional emails
                (password reset, invites, security notices), and enforce
                organization access controls.
              </li>
              <li>To diagnose errors and improve product quality.</li>
              <li>To bill paying customers.</li>
              <li>To respond to your support requests.</li>
            </ul>
            <p className="mt-3">
              We do not sell your data. We do not use your uploaded business
              lists or saved dashboards to train AI models, build aggregate
              datasets sold to other parties, or for any purpose outside
              providing the service to your organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Third-party processors
            </h2>
            <p className="mb-3">
              We rely on the following third-party services to operate
              PinpointIQ. Each is bound by their own privacy terms and our
              service agreement with them.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-gray-900 border-b border-gray-200">
                      Service
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-900 border-b border-gray-200">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2">Railway</td>
                    <td className="px-4 py-2">
                      Backend + database hosting (United States)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Vercel</td>
                    <td className="px-4 py-2">Frontend hosting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Mapbox</td>
                    <td className="px-4 py-2">Map tiles and geocoding</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Google Places</td>
                    <td className="px-4 py-2">
                      Business location data when you fetch competitor layers
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Resend</td>
                    <td className="px-4 py-2">
                      Transactional email (password reset, invites)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">PostHog</td>
                    <td className="px-4 py-2">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Sentry</td>
                    <td className="px-4 py-2">Error monitoring</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Stripe</td>
                    <td className="px-4 py-2">Subscription billing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Data retention
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account and product data</strong> are kept while your
                organization has an active account. If your organization
                cancels, we delete account-identifiable data within 90 days,
                except where retention is required by law.
              </li>
              <li>
                <strong>Server and security logs</strong> are kept for 90 days.
              </li>
              <li>
                <strong>Backups</strong> may persist for up to 30 days beyond
                deletion before being overwritten.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Security
            </h2>
            <p>
              We protect your data in transit with TLS, store passwords as
              salted bcrypt hashes, and scope every database query to your
              organization. Access tokens expire and are invalidated on
              password change. We rate-limit sensitive endpoints, cap upload
              sizes, and run regular security reviews. No system is perfectly
              secure, but we treat your data as if it were our own.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Your rights
            </h2>
            <p className="mb-3">
              You can request the following at any time by emailing us at{" "}
              <a
                href="mailto:privacy@pinpointiq.app"
                className="text-brand-600 hover:text-brand-700"
              >
                privacy@pinpointiq.app
              </a>
              :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A copy of the personal data we hold about you.</li>
              <li>Correction of inaccurate data.</li>
              <li>
                Deletion of your account and associated data (subject to legal
                retention requirements).
              </li>
              <li>
                Export of your dashboards, layers, and saved metrics in a
                machine-readable format.
              </li>
            </ul>
            <p className="mt-3">
              If you are in the EU/UK or California, you have additional
              rights under the GDPR and CCPA respectively. We honor those
              rights for all users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Cookies
            </h2>
            <p>
              We use one essential cookie (
              <span className="font-mono text-gray-700">pinpoint_token</span>)
              to keep you signed in. We do not use marketing or
              cross-site tracking cookies. Product analytics events sent to
              PostHog use a randomized identifier rather than a tracking
              cookie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children
            </h2>
            <p>
              PinpointIQ is a B2B tool intended for use by professionals.
              We do not knowingly collect data from anyone under 16. If you
              believe a child has signed up, contact us and we will delete
              the account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Changes to this policy
            </h2>
            <p>
              When we make material changes we will update the
              &ldquo;Effective&rdquo; date at the top of this page and notify
              users in-app or by email. The current version is always available
              at{" "}
              <span className="font-mono text-gray-700">
                pinpointiq.app/privacy
              </span>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Contact
            </h2>
            <p>
              Questions or requests:{" "}
              <a
                href="mailto:privacy@pinpointiq.app"
                className="text-brand-600 hover:text-brand-700"
              >
                privacy@pinpointiq.app
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500">
          PinpointIQ is operated by 2nd St Strategy.
        </div>
      </div>
    </main>
  );
}
