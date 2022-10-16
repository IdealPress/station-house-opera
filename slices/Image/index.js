import React from "react";
import NextImage from "next/image";

const Image = ({ slice }) => (
  <section>
    <NextImage
      src={slice.primary.image.default.url}
      width={slice.primary.image.default.dimensions.width}
      height={slice.primary.image.default.dimensions.height}
      alt={slice.primary.alt}
    />
  </section>
);

export default Image;
