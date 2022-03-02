import * as React from "react";
import NextLink from "next/link";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  id?: string;
  name?: string;
  image?: string;
  url?: string;
  href: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      href={props.url}
      id={props.id}
      className={classNames("", props.className)}
    >
      <div className="cursor-pointer mx-[32px] my-[16px] shadow-[-4px_4px_0px_0px_rgba(28,214,252,0.85)] rounded-xl w-full h-[56px] bg-gradient-to-r p-[4px] from-[#1CD6FC] via-[#42FCC3] to-[#4D39A8]">
        <div className="pb-[20px] flex flex-col justify-between h-full pt-4 text-white bg-black rounded-xl hover:bg-gradient-to-r from-[#1CD6FC] via-[#42FCC3] to-[#4D39A8] text-base text-center">
          {props.name}
        </div>
      </div>
    </a>
  );
};
export default Button;
