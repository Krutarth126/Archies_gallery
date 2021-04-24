import { StateProvider } from "../component/StateProvider";
import reducer, { initialState } from "../component/Reducers";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Archies Gallery" />
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
