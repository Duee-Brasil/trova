import { imgsList, ProductsTypes } from '@/utils/contants'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { CarouselImages } from '../CarouselImages'

export interface IProductCard {
  type: ProductsTypes
  label: string
  text: ReactNode
  link: string
}

export const ProductCard: FC<IProductCard> = ({ type, label, text, link }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="aspect-square w-full">
        <CarouselImages list={imgsList[type]} square />
      </div>

      <Link href={link} className="as-button w-full">
        {label}
      </Link>
      <div className="w-full text-balance">{text}</div>
    </div>
  )
}
