import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useEffect } from "react";
import { AppProps } from "next/app";
import * as React from "react";
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider attribute="class">
        
        <Component {...pageProps} />
      </ThemeProvider>
      
    </>
  );
}

export default MyApp;
