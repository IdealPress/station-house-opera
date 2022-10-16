import React, { useState } from "react";
import { LightboxContext } from "./LightboxContext";

export default function LightboxProvider({ children }) {
  const [lightboxItems, setLightboxItems] = useState([]);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  return (
    <LightboxContext.Provider
      value={{
        lightboxItems,
        setLightboxItems,
        showLightbox,
        setShowLightbox,
        currentItemIndex,
        setCurrentItemIndex,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}
