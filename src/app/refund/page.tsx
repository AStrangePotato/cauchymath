import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Cauchy Math Online Tutoring",
  description: "Understand our refund policy for services provided by Cauchy Math.",
  keywords: "Refund Policy, Cauchy Math, online tutoring, refunds, payments",
  openGraph: {
    title: "Refund Policy - Cauchy Math Online Tutoring",
    description: "Read about the conditions under which refunds are offered for our services.",
    url: "https://www.cauchymath.xyz/refund-policy",
    type: "website",
  },
};

const RefundPolicy = () => {
  return (
    <>
      <Breadcrumb pageName="Refund Policy" description="" />
      <div className="container mx-auto my-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p>
          We value your satisfaction with our services. This refund policy describes the conditions under which refunds are available.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Refund Eligibility</h2>
        <p>
          Refunds are available if you do not see an improvement in your grade after one month. Please contact us with your concerns to initiate a refund request.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Non-Refundable Situations</h2>
        <p>
          Refunds are not available in the case that Cauchy Math believes the student is not actively trying to improve (not completing homework, academic dishonesty). We will inform the student's parent/guardian in this case, and work something out together.
        </p>
        <p className="mt-4">
          For more information or to request a refund, please contact us.
        </p>
      </div>
    </>
  );
};

export default RefundPolicy;
