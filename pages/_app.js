import "styles/globals.css";
import LightboxProvider from "lib/LightboxProvider";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <LightboxProvider>
      {getLayout(<Component {...pageProps} />)}
    </LightboxProvider>
  );
}
