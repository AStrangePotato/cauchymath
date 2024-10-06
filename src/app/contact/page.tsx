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
    <>
      <Breadcrumb pageName="Contact Page" description="Register or ask about a class. Cauchy Math offers a free trial class available for first-time students, where we will work out your goals and prepare an expert plan to help you succeed." />

      <Contact />
    </>
  );
};

export default ContactPage;
