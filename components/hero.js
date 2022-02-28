import React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import dynamic from "next/dynamic";
import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#halo",
          THREE,
          color: 0x7b8fdd,
          backgroundColor: 0x171717,
          minHeight: 200.0,
          minWidth: 200.0,
          points: 5.0,
          maxDistance: 30.0,
          spacing: 10.0,
        })
      );
    }
    
    return () => {

      
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center lg:w-3/5 lg:pt-32">
          <div className="max-w-5xl mb-8 ">
            <h1 className="text-4xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight dark:text-white">
              We make <br></br>{" "}
              <span className="lg:pl-10 font-inter font-semibold lg:text-[72px] text-transparent bg-gradient-to-r from-[#1CD6FC] via-[#42FCC3] to-[#4D39A8] bg-clip-text">
                beautiful apps
              </span>{" "}
              <br></br>{" "}
              <span className="lg:pl-20">that push brands forward.</span>
            </h1>
            <p className="max-w-3xl py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We partner with brands like yours to create websites your
              customers will remember, vastly improve your key metrics, and
              display your brand with pride.
            </p>

            {/* <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink</button> */}

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https:"
                target="_blank"
                rel="noopener"
                className="py-4 text-lg font-medium text-center underline rounded-md text-mindworks-85black dark:text-gray-300 hover:opacity-80 "
              >
                see what we do
              </a>

              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              {/* <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-full lg:w-2/5"
          id="halo"
          ref={vantaRef}
        >
          <main className="" ref={vantaRef}></main>
          {/* <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            /> */}
        </div>
      </Container>

    </>
  );
}

