import Header from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Header />

      <div className="privacy container">
        <h1>TalkToHomes Privacy Policy</h1>
        <p className="updated">Last updated: May 1, 2025</p>

        <p>
          At TalkToHomes (“we”, “us”, or “our”), we value your privacy. This
          Privacy Policy explains how we collect, use, and protect your personal
          information, particularly when you use our services and SMS text
          messaging platform.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information from you:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Information you provide to
            us, such as your name, phone number, email address, and any other
            details you submit through our website or services.
          </li>
          <li>
            <strong>SMS Messages and Data:</strong> The content of text messages
            you send to or receive from us, along with associated data (such as
            dates and times of messages and delivery status).
          </li>
          <li>
            <strong>Usage Information:</strong> Data about how you use our
            services, which helps us improve our service (for example, technical
            logs or cookie data if you use our website).
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>
            Provide you with the services you request, such as sending you
            updates or notifications via SMS.
          </li>
          <li>
            Communicate with you about your inquiries, accounts, or transactions
            (e.g., to respond to questions or provide customer support).
          </li>
          <li>
            Send you marketing or promotional communications, but only if you
            have explicitly opted in to receive them.
          </li>
          <li>
            Improve our services and understand how users interact with our
            platform.
          </li>
          <li>Comply with applicable laws, regulations, and legal requests.</li>
        </ul>

        <h2>SMS Consent and Opt-Out</h2>
        <p>
          By providing your phone number or opting in, you consent to receive
          SMS text messages from TalkToHomes. These messages may be recurring
          and may include service updates, reminders, or offers. Message and
          data rates may apply. To opt out, simply reply with the word{" "}
          <strong>“STOP”</strong> to any message we send. For assistance, reply{" "}
          <strong>“HELP”</strong> or contact us directly.
        </p>

        <h2>Data Sharing and Disclosure</h2>
        <p>
          We respect your privacy. We do not sell, rent, or share your personal
          information, including your mobile phone number or SMS opt-in data,
          with any third parties or affiliates for their marketing or
          promotional purposes.
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with trusted third-party service providers who work on our behalf to
            help us deliver our services. These partners are contractually
            obligated to keep your information confidential and use it only for
            the services requested.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law or to protect our rights or the
            safety of others.
          </li>
          <li>
            <strong>Business Transfers:</strong> If TalkToHomes is involved in a
            merger, acquisition, or sale of assets, your information may be
            transferred to the successor company.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take the security of your personal information seriously.
          TalkToHomes implements industry-standard security measures such as
          encryption, secure servers, and regular system monitoring. While we
          strive to safeguard your information, no method of transmission or
          storage is 100% secure.
        </p>

        <h2>Your Rights and Choices</h2>
        <ul>
          <li>
            <strong>Opting Out of SMS:</strong> You can opt out of text messages
            at any time by replying “STOP” or contacting us directly.
          </li>
          <li>
            <strong>Access and Correction:</strong> You may contact us to
            request updates or corrections to your personal information.
          </li>
          <li>
            <strong>Deletion (Right to Be Forgotten):</strong> You may request
            that we delete your personal information, subject to legal
            obligations.
          </li>
          <li>
            <strong>Consent Withdrawal:</strong> You can withdraw consent for
            optional uses (such as marketing messages) at any time.
          </li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will update the “Last Updated” date at the top of
          this policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal information, please contact us:
        </p>
        <address>
          <p>TalkToHomes, Inc.</p>
          <p>1309 Coffeen Ave, STE 1200</p>
          <p>Sheridan, WY 82801, USA</p>
          <p>Email: info@talktohomes.com</p>
          <p>Phone: (786) 220-3280</p>
        </address>
      </div>
    </>
  );
}
