import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";

import { LightboxContext } from "lib/LightboxContext";
import { useLightbox } from "lib/hooks";

const Gallery = ({ slice }) => {
  const { selectItem, showLightbox } = useLightbox();

  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 lg:px-12 w-full">
      {slice.items?.map((item, index) => (
        <div
          key={index}
          onClick={() => selectItem(index)}
          className="cursor-pointer"
        >
          {item.image.url ? (
            <Image
              src={item.image.url}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              alt={item.image.dimensions.alt}
            />
          ) : (
            <Vimeo
              video={item.embed.embed_url}
              responsive
              dnt={true}
              autoplay={true}
              muted={true}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Gallery;
