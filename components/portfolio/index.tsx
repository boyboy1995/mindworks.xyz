import React from "react";
import Image from "next/image";
import Container from "../container";
import Link from "../link";
import Title from "../title";
import Button from "../button";
import Carousel from "./carousel";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "../sectionTitle";
import { defaultMaxListeners } from "stream";

const Portfolio = () => {

  return (
    <Container>
          <div className="mt-[80px] font-semibold leading-snug text-transparent font-['Poppins'] lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight bg-gradient-to-r from-[#1CD6FC] via-[#42FCC3] to-[#4D39A8] bg-clip-text mb-[20px]">
          <span className="dark:text-mindworks-85white">It’s time to see</span>  some work. <span className="dark:text-mindworks-85white">Here are a few shots, pitch work and design explorations </span> we’ve done for clients
          </div>


          <Carousel>
            
          </Carousel>
    </Container>
  );
};
export default Portfolio;