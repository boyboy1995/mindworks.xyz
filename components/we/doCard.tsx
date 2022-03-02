import React from "react";

interface DoProps {
    title: string;
    desc?: string;
    image?: string;
    imgAlt?: string;
  }
  
    const DoCard: React.FC<DoProps> = ({ title, desc, image, imgAlt }) => (
        <div className="flex flex-col lg:p-[20px] item-start">
          <div className="max-w-[400px] rounded-[16px] p-[20px]">
            <div className="flex items-center relative lg:mb-5 lg:pl-[31px] lg:pt-[10px]">
              <img src="./img/whatwedo.svg"></img>
            </div>
            <div className="px-8 pb-4">
              <h2 className="text-mindworks-85white text-[24px] title-font font-medium mb-2">
                {title}
              </h2>
              <p className="leading-relaxed text-[20px] pt-[16px] text-mindworks-gray">
                What you envision to be the future of your business drives the
                technology, not the other way around. We help you formulate a new
                vision and bring it to life.
              </p>
            </div>
          </div>
        </div>
      );
export default DoCard;