import React from "react";
import Image from "next/image";
import Container from "../container";
import Link from "../link";
import Title from "../title";
import ProcessCard from "./processCard";
import Button from "../button";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "../sectionTitle";
import { defaultMaxListeners } from "stream";

const Process = () => {

  return (
    <Container>
      <div className="">
        <Title title="Our Work Process"></Title>
        <p className="md:w-3/5 md:mb-[80px] md:mt-[4px] leading-relaxed text-base text-[20px] dark:text-gray-400">
          <span className="dark:text-mindworks-85whi te">
            We work in agile!
          </span>{" "}
          The Agile methodology is a way to manage a project by breaking it up
          into several phases. It involves constant collaboration with
          stakeholders and continuous improvement at every stage. Once the work
          begins, teams cycle through a process of planning, executing, and
          evaluating.
        </p>
      </div>
      <div className="relative flex justify-center m-auto lg:mb-10 lg:w-auto">
        <img src="img/arrow1.svg"></img>
      </div>
      <div className="relative flex items-center justify-center m-auto lg:mb-5">
        <div className="relative flex flex-row items-center justify-center m-auto lg:w-auto">
          <ProcessCard
            title="Requirements"
            image="./img/requirements.svg"
          ></ProcessCard>
          <ProcessCard title="Design" image="./img/design.svg"></ProcessCard>
          <ProcessCard title="Develop" image="./img/develop.svg"></ProcessCard>
          <ProcessCard title="Test" image="./img/Test.svg"></ProcessCard>
          <ProcessCard title="Deploy" image="./img/deploy.svg"></ProcessCard>
          <ProcessCard
            title="Maintenance"
            image="./img/maintenance.svg"
          ></ProcessCard>
        </div>
      </div>
      <div className="relative flex justify-center m-auto lg:mb-[80px] lg:w-auto">
        <img src="img/arrow2.svg"></img>
      </div>
      <div className="flex">
      {/* <Button
      className="mt-[40px] ml-[4px] " href="/" name="Get a free consultation!"
      >
      </Button> */}
      </div>
    </Container>
  );
};
export default Process;