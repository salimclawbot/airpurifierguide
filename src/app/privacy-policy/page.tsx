import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${siteConfig.name} privacy policy.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: March 15, 2026</p>
        <div className="prose mt-8 max-w-none">
          <p>
            Jaw Pain Guide respects your privacy and is committed to explaining clearly how information is collected,
            used, stored, and shared when you visit this website. This policy applies to visitors who browse our
            articles, sign up for a newsletter, use our contact forms, or interact with affiliate links and analytics
            tools. Because this site provides health education, we aim to keep data collection narrow and practical.
            We do not ask readers to create accounts, and we do not operate a patient portal or medical record system.
          </p>
          <p>
            When you visit the site, standard technical information may be collected automatically. This can include IP
            address, browser type, operating system, device type, pages viewed, time on page, referring website,
            general geographic region, and diagnostic performance data. We use this information to understand how
            readers use the site, improve content quality, monitor traffic patterns, troubleshoot errors, and maintain
            security. Like most websites, this information may be collected through server logs, content delivery
            systems, and analytics tools.
          </p>
          <p>
            If you submit information through a contact form or email us directly, we may collect your name, email
            address, and any information you choose to include in the message. Please do not send sensitive medical
            records, insurance information, or urgent health details through general contact forms. Jaw Pain Guide is
            not a healthcare provider portal and is not intended for emergency communication. If you are experiencing a
            medical emergency, you should contact local emergency services or a licensed clinician directly.
          </p>
          <p>
            We may use cookies or similar technologies for core site function, traffic measurement, content testing,
            and affiliate attribution. Cookies can help us remember aggregate visitor preferences, understand which
            guides are most useful, and measure how users move through the site. You can usually modify cookie settings
            through your browser. If you disable some cookies, portions of the site may still work, but analytics or
            preference-related behavior may be reduced.
          </p>
          <p>
            We may work with third-party service providers such as hosting platforms, analytics vendors, email service
            providers, and affiliate networks. These providers may process limited information on our behalf according
            to their own privacy policies and contractual arrangements. For example, a hosting provider may log
            requests for security and performance, an analytics provider may measure visits and engagement, and a
            retailer may track outbound referral clicks that originate from product recommendation pages.
          </p>
          <p>
            Some pages may contain affiliate links, including Amazon links. If you click one of these links, the
            retailer may use cookies or other tracking methods to attribute a referral. Jaw Pain Guide may receive a
            commission if a purchase occurs. We do not receive your full payment details from the retailer, and we do
            not process transactions on this site directly. Product purchases occur on third-party platforms governed by
            those platforms&apos; terms and privacy practices.
          </p>
          <p>
            We use collected information to operate the site, improve reader experience, understand which topics are
            most helpful, respond to inquiries, send emails when you request them, maintain site integrity, and comply
            with legal obligations. We may also use aggregated, non-identifying analytics data to make editorial and
            business decisions, such as updating an article that readers repeatedly exit or expanding guides on common
            symptom questions.
          </p>
          <p>
            We do not sell personal information in the ordinary sense of exchanging directly identifying data for cash.
            However, some privacy laws define data sharing broadly. Depending on where you live, you may have rights to
            request access to personal information, correction of inaccurate information, deletion of certain data,
            restriction of some processing, or information about how your data is used. If you would like to make a
            privacy request, contact us at {siteConfig.privacyEmail}. We may need to verify your identity before
            responding.
          </p>
          <p>
            Data retention depends on the nature of the information and the reason it was collected. We generally keep
            technical logs for limited operational periods, retain contact emails for as long as needed to respond and
            maintain business records, and preserve analytics information in aggregate form according to provider
            settings. When information is no longer reasonably necessary, we aim to delete it or de-identify it.
          </p>
          <p>
            We take reasonable administrative, technical, and organizational measures to protect information against
            unauthorized access, loss, misuse, or alteration. No online system is perfectly secure, and we cannot
            guarantee absolute security. You should use caution when sharing personal information online and avoid
            sending highly sensitive health details through general site forms.
          </p>
          <p>
            This site is intended for a general audience and is not directed to children under 13. We do not knowingly
            collect personal information from children under 13 through the site. If you believe a child has submitted
            personal information to us, please contact us so we can investigate and remove it where appropriate.
          </p>
          <p>
            Jaw Pain Guide may update this policy from time to time as site practices, technology, law, or vendor
            relationships change. When updates are material, we will revise the date at the top of this page and post
            the new version here. Your continued use of the site after changes are posted indicates acceptance of the
            updated policy to the extent permitted by law.
          </p>
          <p>
            Questions about this policy can be sent to <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.
          </p>
        </div>
      </article>
    </section>
  );
}
