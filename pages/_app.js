import { StateProvider } from "../component/StateProvider";
import reducer, { initialState } from "../component/Reducers";
import "../styles/globals.css";
import Head from "next/head";
import "react-notifications/lib/notifications.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Archies-Gallery" />
        <meta
          name="description"
          content="want women-wear dresses, hand-made-snacks & bhagwan-vastra?Get it here at affordable price in bilaspur"
        />
        <meta
          name="keywords"
          content="Archies-Gallery, Hand-Made-Snacks in bilaspur, Women-Wear in bilaspur"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Archies Gallery" />
        <meta
          name="google-site-verification"
          content="kHmxmRZWnZXaDTow6wcKwRprVh52MQDs2rudCjkA750"
        />
        <meta
          property="og:description"
          content="Get the best Product at affordable price"
        />
        <meta
          property="og:image"
          content="https://st2.depositphotos.com/4398873/7993/v/600/depositphotos_79933844-stock-illustration-a-and-c-letters-logo.jpg"
        />
        <meta property="og:url" content="https://archies-galley.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
