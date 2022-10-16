import { useContext } from "react";

import { LightboxContext } from "lib/LightboxContext";

export function useLightbox() {
  const {
    setShowLightbox,
    lightboxItems,
    currentItemIndex,
    setCurrentItemIndex,
  } = useContext(LightboxContext);

  const showLightbox = () => {
    setShowLightbox(true);
  };

  const hideLightbox = () => {
    setShowLightbox(false);
  };

  const nextItem = () => {
    currentItemIndex < lightboxItems.length - 1
      ? setCurrentItemIndex(currentItemIndex + 1)
      : setCurrentItemIndex(0);
  };

  const prevItem = () => {
    currentItemIndex === 0
      ? setCurrentItemIndex(lightboxItems.length - 1)
      : setCurrentItemIndex(currentItemIndex - 1);
  };

  const selectItem = (index) => {
    setCurrentItemIndex(index);
    showLightbox();
  };

  const currentItem = lightboxItems[currentItemIndex];

  const lightboxHasItems = lightboxItems.length;

  return {
    showLightbox,
    hideLightbox,
    nextItem,
    prevItem,
    selectItem,
    currentItem,
    lightboxHasItems,
  };
}
