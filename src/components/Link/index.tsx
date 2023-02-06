import NextLink from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

const Link = ({children, href, ...props}: Props) => {
  return (
    <NextLink href="/register">
    <a {...props}>{children}</a>
    </NextLink>
  )
}

