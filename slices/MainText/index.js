import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const MainText = ({ slice }) => (
  <section className="px-6">
    <div className="prose prose-lg mx-auto leading-snug">
      {slice.primary.text && 
        <PrismicRichText 
          field={slice.primary.text} 
          components={{
            image: ({ node, key }) => {
              const img = (
                <Image
                  src={node.url}
                  alt={node.alt ?? undefined}
                  data-copyright={node.copyright ? node.copyright : undefined}
                  width={node.dimensions.width}
                  height={node.dimensions.height}
                />
              )
        
              return (
                <p key={key} className="w-11/12 mx-auto">
                  {node.linkTo ? (
                    <PrismicLink
                      linkResolver={args.linkResolver}
                      internalComponent={args.internalLinkComponent}
                      externalComponent={args.externalLinkComponent}
                      field={node.linkTo}
                    >
                      {img}
                    </PrismicLink>
                  ) : (
                    img
                  )}
                </p>
              )
            }
          }}
        />
      }
    </div>
  </section>
);

export default MainText;
