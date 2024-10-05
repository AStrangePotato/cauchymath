import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Cauchy Math Online Tutoring",
  description: "Get in touch with Cauchy Math for all your online tutoring needs. We're here to help students excel in mathematics.",
  keywords: "Cauchy Math, online tutoring, math tutoring, contact, mathematics help",
  openGraph: {
    title: "Contact Us - Cauchy Math Online Tutoring",
    description: "Reach out to us at Cauchy Math for online tutoring services. We are committed to helping students succeed in mathematics.",
    url: "https://www.cauchymath.xyz/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" description="" />
      <div className="iframe-container mx-auto my-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScT4Kjx4ewp_5zwdcQjR4KiyzBHNQEPAyuRb0ZOY-ovC5HmYw/viewform?embedded=true"
          width="100%"
          height="100%"
          className="w-full h-[1200px] overflow-hidden"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
