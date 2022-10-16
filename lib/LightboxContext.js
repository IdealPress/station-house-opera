import { createContext } from "react";

export const LightboxContext = createContext({
  lightboxItems: null,
  setLightboxItems: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
  showLightbox: null,
  setShowLightbox: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
  currentItemIndex: null,
  setCurrentItemIndex: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});
