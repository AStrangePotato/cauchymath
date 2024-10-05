import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cauchy Math Online Tutoring",
  description: "Learn about how Cauchy Math collects, uses, and protects your personal information.",
  keywords: "Privacy Policy, Cauchy Math, online tutoring, data protection, privacy",
  openGraph: {
    title: "Privacy Policy - Cauchy Math Online Tutoring",
    description: "Understand how Cauchy Math collects and uses your personal information.",
    url: "https://www.cauchymath.xyz/privacy-policy",
    type: "website",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" description="" />
      <div className="container mx-auto my-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p>
          At Cauchy Math, your privacy is important to us. This privacy policy outlines how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and any other details you provide when contacting us or using our services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
        <p>
          The information we collect is used to provide our tutoring services, improve user experience, and communicate important updates or offers. Students taking the contest course and have shared their scores may also appear on our website for promotional and/or celebration purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Data Protection</h2>
        <p>
          We are committed to protecting your personal information. We use various security measures to ensure that your data is safe.
        </p>
        <p className="mt-4">
          If you have any questions about our privacy practices, feel free to contact us.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
