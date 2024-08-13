import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ClassAttributes } from 'react'

export const LinkButton = ({
  className,
  ...props
}: LinkProps &
  ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      className={`border-2 border-primary p-4 px-8 text-xl bg-white bg-opacity-60 text-primary hover:scale-105 ${className}`}
      {...props}
    />
  )
}
