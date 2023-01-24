import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

import "styles/globals.css";
import LightboxProvider from "lib/LightboxProvider";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <LightboxProvider>
          {getLayout(<Component {...pageProps} />)}
        </LightboxProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
