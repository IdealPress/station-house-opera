import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";

import { LightboxContext } from "lib/LightboxContext";
import { useLightbox } from "lib/hooks";

const Gallery = ({ slice }) => {
  const { selectItem, showLightbox } = useLightbox();
  console.log(slice.items.map((item) => item.image.url !== undefined))
  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 lg:px-12 w-full">
      {slice.items?.map((item, index) => (
        <div
          key={index}
          onClick={() => selectItem(index)}
          className="cursor-pointer flex items-center"
        >
          {item.image.url !== undefined ? (
            <Image
              src={item.image[item.dimensions]?.url || item.image.default.url}
              width={item.image[item.dimensions]?.dimensions.width || item.image.default.dimensions.width}
              height={item.image[item.dimensions]?.dimensions.height || item.image.default.dimensions.height}
              alt={item.image.alt}
            />
          ) : (
            <div className="w-full h-full">
              {item.embed.embed_url &&
                <>
                  <Vimeo
                    video={item.embed.embed_url}
                    responsive
                    dnt={true}
                    autoplay={true}
                    muted={true}
                  />
                </>
              }
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Gallery;
