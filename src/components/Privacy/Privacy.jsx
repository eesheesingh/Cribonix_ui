import React from 'react';
import styles from '../../style';
import BlogNavbar from '../Suggestion/BlogNavbar';

const Privacy = () => {
  return (
    <div className={`flex flex-col ${styles.boxWidth} md:px-[7rem] px-1 bg-[#f7f7f7]`}>
      <BlogNavbar />
      <div className={`md:mt-[6rem] md:mb-[3rem] mt-[6rem] mb-[10rem] flex flex-col items-start bg-[#fff] p-5 shadow-xl rounded-[20px]`}>
        <h1 className="text-4xl font-bold mb-6 text-left">Privacy Policy</h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          This Privacy Policy describes how we collect, use, and share your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We collect information that you provide to us directly, such as when you create an account, update your profile, or use interactive features of the site. We also collect information automatically, including usage information, log data, and cookies.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Information Use</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We use the information we collect to provide, maintain, and improve our services. This includes using your information to personalize your experience, communicate with you, and understand how our services are used.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We do not share your personal information with third parties except as described in this policy. We may share information with service providers, for legal reasons, and in the event of a business transfer.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          You have the right to access, update, and delete your personal information. You can also object to the processing of your personal information and request that we restrict processing of your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@example.com" className="underline">privacy@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
