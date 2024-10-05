import About from "@/components/About/AboutSection";
import TrustBanner from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cauchy Math Online Tutoring Service - Personalized Math Help",
  description: "Cauchy Math Tutoring offers expert online math tutoring for high school and college students. Personalized, affordable, and flexible math help, covering algebra, calculus, geometry, and more. Get one-on-one sessions with experienced math tutors today.",
  keywords: "Cauchy Math, online math tutoring, math tutoring service, math help, algebra tutor, calculus tutoring, personalized math tutoring, high school math tutor, college math help, online math lessons, one-on-one math tutoring",
  openGraph: {
    title: "Cauchy Math Online Tutoring - Expert Math Help for Students",
    description: "Find personalized online math tutoring at Cauchy Math Tutoring Service. Our experienced tutors are here to help you excel in algebra, calculus, and beyond.",
    url: "https://cauchymath.xyz",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <TrustBanner />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
