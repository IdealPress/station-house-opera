import React from "react";
import { PrismicRichText } from "@prismicio/react";

const LeadText = ({ slice }) => (
  <section className="px-6">
    <div className="text-2xl sm:text-3xl md:text-4xl w-full md:w-4/5 leading-snug">
      {slice.primary.text && <PrismicRichText field={slice.primary.text} />}
    </div>
  </section>
);

export default LeadText;
