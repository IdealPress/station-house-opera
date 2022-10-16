import React from "react";
import { PrismicRichText } from "@prismicio/react";

const MainText = ({ slice }) => (
  <section className="px-6">
    <div className="prose prose-lg mx-auto">
      {slice.primary.text && <PrismicRichText field={slice.primary.text} />}
    </div>
  </section>
);

export default MainText;
