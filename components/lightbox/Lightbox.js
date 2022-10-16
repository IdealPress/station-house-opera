import { useContext } from "react";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";

import { LightboxContext } from "lib/LightboxContext";
import { useLightbox } from "lib/hooks";

import { SVGArrowLeft, SVGArrowRight, SVGCross } from "components";

export default function Lightbox() {
  const { hideLightbox, nextItem, prevItem, currentItem, lightboxHasItems } =
    useLightbox();

  return (
    <div className="fixed z-10 top-0 w-screen min-h-screen bg-black">
      <div className="flex justify-between p-6 bg-black sticky top-0 z-30 ">
        {currentItem?.$description && <p>{currentItem?.$description}</p>}
        <div className="flex">
          <button onClick={prevItem}>
            <SVGArrowLeft className="text-current w-12 h-6" />
          </button>
          <button onClick={nextItem}>
            <SVGArrowRight className="text-current w-12 h-6" />
          </button>
          <button onClick={hideLightbox}>
            <SVGCross className="text-current w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="">
        {lightboxHasItems && (
          <>
            {currentItem?.$type === "image" ? (
              <div className="w-full h-screen flex items-center -mt-16 justify-center">
                <Image
                  src={currentItem?.url}
                  alt={currentItem?.alt}
                  width={currentItem?.dimensions.width}
                  height={currentItem?.dimensions.height}
                />
              </div>
            ) : (
              <Vimeo
                video={currentItem?.embed_url}
                responsive
                dnt={true}
                autoplay={true}
                muted={true}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
