import { AnchorHTMLAttributes, ClassAttributes } from 'react'
import Link, { LinkProps } from 'next/link'

export const LinkButton = ({
  className,
  ...props
}: LinkProps &
  ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      className={`border-primary bg-primary hover:text-primary border-4 p-8 text-4xl text-white hover:bg-white hover:bg-opacity-60 ${className}`}
      {...props}
    />
  )
}
