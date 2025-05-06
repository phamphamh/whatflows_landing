
import * as React from "react";
import { ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 mt-12 px-5 md:px-8 lg:px-12">
      <div className="p-8 md:p-10 lg:p-12 text-center bg-emerald-500 rounded-3xl">
        <h2 className="text-4xl font-semibold text-white max-sm:text-3xl">
          Contact our team
        </h2>
        <p className="mt-2.5 text-base font-medium text-white max-sm:text-sm">
          Have a question or need a custom solution? Contact us at:
        </p>
        <a
          href="mailto:hello@whatflows.io"
          className="flex gap-2 justify-center items-center mt-4 text-xl font-semibold text-white hover:underline max-sm:text-base"
        >
          <span>hello@whatflows.io</span>
          <ArrowRight className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
