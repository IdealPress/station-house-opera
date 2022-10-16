import React from "react";
import { PrismicRichText } from "@prismicio/react";

const LeadText = ({ slice }) => (
  <section className="px-6">
    <div className="text-4xl w-4/5 leading-snug">
      {slice.primary.text && <PrismicRichText field={slice.primary.text} />}
    </div>
  </section>
);

export default LeadText;
