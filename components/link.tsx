import * as React from 'react';
import NextLink from 'next/link';
import classNames from 'classnames';
import { LinkProps } from 'next/link';
import { useRouter, withRouter } from 'next/router';

interface ILinkProps extends LinkProps {
  activeClassName?: string;
  href: string;
  newTab?: boolean;
}

const Link: React.FC<ILinkProps> = ({
  children,
  activeClassName,
  ...props
}) => {
  const child = React.Children.only(children) as React.ReactElement<any>;
  const router = useRouter();

  return (
    <NextLink {...props}>
      {React.cloneElement(child as React.ReactElement<any>, {
        className: classNames(
          child.props.className || '',
          router
            ? `/${router.pathname.split('/')[1]}` === props.href
              ? activeClassName
              : null
            : null
        ),
      })}
    </NextLink>
  );
};

export default Link;
