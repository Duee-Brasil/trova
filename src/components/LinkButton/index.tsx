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
      className={`border-4 border-primary bg-primary p-8 text-4xl text-white hover:bg-white hover:bg-opacity-60 hover:text-primary ${className}`}
      {...props}
    />
  )
}
