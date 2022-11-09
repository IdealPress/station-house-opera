import React from "react";
import { PrismicRichText } from "@prismicio/react";

import styles from "./LeadText.module.css"

const LeadText = ({ slice }) => (
  <section className="px-6 lg:px-12">
    <div className={styles.base}>
      {slice.primary.text && <PrismicRichText field={slice.primary.text} />}
    </div>
  </section>
);

export default LeadText;
