import React from "react";
import Image from "next/image";
import Container from "../container";
import Title from "../title";
import DoCard from "./doCard";
import Button from "../button";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "../sectionTitle";

const We = () => {
  return (
    <Container>
      <div className="container flex flex-wrap lg:py-[160px] mx-auto">
        <Title title="Who we are"></Title>
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
        <Button className="mt-[40px] mx-[-28px]" href="/" name="Get a free consultation!"></Button>
      </div>
      <Title title="What we do"></Title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-40 text-gray-300">
          <div className="flex justify-center">
            <DoCard title="Innovation Consulting"></DoCard>
            <DoCard title="Digital Transformation"></DoCard>
            <DoCard title="Software Engineering"></DoCard>
          </div>
          <div className="flex justify-center">
            <DoCard title="Big Data & Analytics"></DoCard>
            <DoCard title="Artificial Intelligence"></DoCard>
            <DoCard title="Extended Reality"></DoCard>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default We;
