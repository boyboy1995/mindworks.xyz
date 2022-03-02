import * as React from 'react';
import NextLink from 'next/link';
import classNames from 'classnames';
import { LinkProps } from 'next/link';
import { useRouter, withRouter } from 'next/router';

interface TitleProps {
    className?: string;
    id?: string;
    title: string;
  }
  const Title: React.FC<TitleProps> = (props) => {
    return (
      <h2
        id={props.id}
        className={classNames(
          "text-2xl mb-[20px] font-bold font-['Poppins'] leading-snug tracking-tight sm:text-3xl lg:text-4xl lg:leading-tight xl:text-7xl dark:text-mindworks-85white md:w-2/5 ",
          props.className
        )}
      >
        {props.title}
      </h2>
    );
  };
  export default Title;
  
