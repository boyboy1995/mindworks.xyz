import React from "react";
import Image from "next/image";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "./sectionTitle";
import { defaultMaxListeners } from "stream";

const Process = () => {


  return (
    <Container>
      <div className="md:pl-6">
        <h2 className="mb-[24px] text-4xl font-bold font-['Poppins'] leading-snug tracking-tight sm:text-3xl lg:text-4xl lg:leading-tight xl:text-7xl dark:text-mindworks-85white md:w-2/5">
          Our Work Process
        </h2>
        <p className="md:w-3/5 md:mb-[80px] leading-relaxed text-base text-[20px] dark:text-gray-400">
          <span className="dark:text-mindworks-85white">We work in agile!</span>{" "}
          The Agile methodology is a way to manage a project by breaking it up
          into several phases. It involves constant collaboration with
          stakeholders and continuous improvement at every stage. Once the work
          begins, teams cycle through a process of planning, executing, and
          evaluating.
        </p>
      </div>

          < div className="relative flex justify-center m-auto lg:mb-5 lg:w-auto">
          <img src="img/arrow1.svg"></img>
          </div>
      <div className="relative flex items-center justify-center m-auto lg:mb-5">
        <div className="relative flex flex-row items-center justify-center m-auto lg:mb-5 lg:w-auto">
          <div className="relative flex justify-center m-auto bg-no-repeat lg:mb-5 bg-auto lg:w-[200px] lg:h-[250px]" style={{
              backgroundImage: `url("./img/vector.svg")`,
            }}>
                      <p className="md:w-3/5 md:mb-[80px] leading-relaxed text-base text-[20px] dark:text-gray-400">
          <span className="">We work in agile!</span>{" "}
        </p>
              
            
          </div>
          <div className="relative flex justify-center m-auto lg:mb-5 lg:w-auto">
            {/* <img src="./img/vector.svg"></img> */}
          </div>
          <div className="relative flex justify-center m-auto lg:mb-5 lg:w-auto">
            {/* <img src="./img/vector.svg"></img> */}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Process;
