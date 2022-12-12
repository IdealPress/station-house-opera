import React from "react";
import { PrismicRichText } from "@prismicio/react";

import styles from "./LeadText.module.css"

const LeadText = ({ slice }) => (
  <section className="px-6">
    <div className="prose prose-lg mx-auto leading-snug">
      {slice.primary.text && <PrismicRichText field={slice.primary.text} />}
    </div>
  </section>
);

export default LeadText;
