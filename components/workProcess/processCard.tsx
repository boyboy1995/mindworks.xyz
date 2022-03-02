import React from "react";

interface ProcessProps {
    title: string;
    image: string;
    bgImg?: string;
    imgAlt?: string;
  }
  const ProcessCard: React.FC<ProcessProps> = ({
    title,
    image,
    bgImg,
    imgAlt,
  }) => (
    <div
      className="relative flex flex-col justify-center m-auto bg-no-repeat lg:mb-5 bg-auto lg:w-[200px] lg:h-[250px]"
      style={{
        backgroundImage: `url("./img/vector.svg")`,
      }}
    >
      <p className="absolute md:ml-[30px] md:mt-[-190px] md:pb-[0px] leading-relaxed text-base text-[18px] text-white">
        {title}
      </p>
      <img
        className="md:mt-[0px] md:ml-[60px] h-[120px] w-[120px]"
        src={image}
        alt={imgAlt}
      />
    </div>
  );
export default ProcessCard;