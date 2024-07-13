import { wppLink } from '@/utils/contants'
import { AnchorHTMLAttributes, ClassAttributes, JSX } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'

export const WppButton = ({
  className,
  ...props
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <div className="my-8 flex w-full">
      <a
        href={wppLink}
        target="_blank"
        className={`rounded-full border-4 border-green-500 bg-white px-8 py-4 text-3xl text-green-500 hover:bg-green-500 hover:text-white ${className}`}
        {...props}
      >
        <div className="flex flex-row gap-4">
          <IoLogoWhatsapp className="text-4xl" /> Entre em contato
        </div>
      </a>
    </div>
  )
}
