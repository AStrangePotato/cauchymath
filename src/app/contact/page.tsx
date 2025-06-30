import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Cauchy Math Online Tutoring",
  description: "Get in touch with Cauchy Math for all your online tutoring needs. Book a free trial class today. We're here to help students excel in mathematics.",
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
    <div className="mt-12">
      <Breadcrumb pageName="Contact Page" description="Cauchy Math offers a free trial class available for first-time students, where we will work out your goals and prepare an expert plan to help you succeed." />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScT4Kjx4ewp_5zwdcQjR4KiyzBHNQEPAyuRb0ZOY-ovC5HmYw/viewform?embedded=true" 
          width="740" 
          height="1312" 
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ContactPage;
