import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

import styles from "./Announcement.module.css"

export default function Announcement({announcement}) {
  return (
    <div
      className={styles.base}
    >
      <p className="text-2xl">{announcement.title}</p>
      <p className="text-sm">{announcement.date}</p>
      <PrismicRichText field={announcement.text} />
      {announcement.image?.url && (
        <div className="grayscale pt-8 w-2/3 mx-auto">
          <Image
            src={announcement.image.url}
            width={announcement.image.dimensions.width}
            height={announcement.image.dimensions.height}
            alt={announcement.image.alt}
          />
        </div>
      )}
    </div>
  );
}