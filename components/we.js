import React from "react";
import Image from "next/image";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "../components/sectionTitle";

export default function We() {
  return (
    <Container>
      <div className="container flex flex-wrap py-[80px] mx-auto">
        <h2 className="mb-2 text-4xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl lg:leading-tight xl:text-7xl dark:text-mindworks-85white md:w-2/5">
          Who we are
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <div className="font-semibold leading-snug text-transparent font-['Poppins'] lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight bg-gradient-to-r from-[#1CD6FC] via-[#42FCC3] to-[#4D39A8] bg-clip-text mb-[20px]">
            10+ years of experience
          </div>
          <p className="leading-relaxed text-base text-[20px] dark:text-gray-400">
            Mindworks Interactive composed of a team with all the essential
            elements:{" "}
            <span className="dark:text-mindworks-85white">
              more than 10 years of collective experience in Software
              Development, User-Centered Design, and Strategic Search Engine
              Optimization.
            </span>{" "}
            Combine it with a culture of innovation and creativity, your project
            is sure to be in great hands.
          </p>
        </div>
      </div>

      <h2 className="mb-2 text-4xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl lg:leading-tight xl:text-7xl dark:text-mindworks-85white md:w-2/5">
        What we do
      </h2>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 text-gray-300">
          <div class="flex md:space-x-[40px] justify-center">
            <div class="mb-10 flex flex-col item-start ">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                    Innovation Consulting
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-10 flex flex-col item-start ">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                  Digital Transformation
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-10 flex flex-col item-start ">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                  Software Engineering
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex md:space-x-[40px] justify-center">
            <div class="mb-10 flex flex-col item-start">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                  Big Data & Analytics
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-10 flex flex-col item-start">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                  Artificial Intelligence
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-10 flex flex-col item-start">
              <div class="max-w-[400px] rounded-[16px] bg-gray-900 p-[20px]">
                <div class="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
                  <img src="./img/whatwedo.svg">
                  </img>
                </div>
                <div class="px-8 pb-4">
                  <h2 class="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                  Extended Reality
                  </h2>
                  <p class="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                    What you envision to be the future of your business drives
                    the technology, not the other way around. We help you
                    formulate a new vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </Container>
  );

}
