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
      className={`border-4 border-primary bg-primary p-4 px-8 text-xl text-white hover:bg-white hover:bg-opacity-60 hover:text-primary ${className}`}
      {...props}
    />
  )
}
