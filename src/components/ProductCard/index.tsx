import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface IProductCard {
  image: string
  label: string
  text: ReactNode
  link: string
}

export const ProductCard: FC<IProductCard> = ({ image, label, text, link }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Image
        src={image}
        alt={label}
        width={484}
        height={420}
        className="m-auto w-full"
      />
      <Link href={link} className="as-button w-full">
        {label}
      </Link>
      <div className="w-full text-balance">{text}</div>
    </div>
  )
}
