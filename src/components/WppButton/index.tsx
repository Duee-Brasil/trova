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
        className={`rounded-full border-2 border-green-500 bg-white px-8 py-2 text-lg text-green-500 hover:bg-green-500 hover:text-white ${className}`}
        {...props}
      >
        <div className="flex flex-row gap-4 font-bold items-center">
          <IoLogoWhatsapp className="text-2xl" /> Entre em contato
        </div>
      </a>
    </div>
  )
}
