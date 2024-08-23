import { wppLink } from '@/utils/contants'
import Image from 'next/image'
import { AnchorHTMLAttributes, ClassAttributes, JSX } from 'react'

export const WppButtonFloating = ({
  ...props
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <div className="fixed right-12 bottom-10">
      <a
        href={wppLink}
        target="_blank"
        className={`rounded-full px-8 py-2 hover:scale-105`}
        {...props}
      >
        <Image
          src="/images/whatsapp.png"
          alt="entre em contato"
          width={80}
          height={80}
          quality={50}
          // placeholder="blur"
        />
      </a>
    </div>
  )
}
