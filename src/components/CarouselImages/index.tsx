'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

export const CarouselImages: FC<{ list: { src: string; name: string }[] }> = ({
  list,
}) => {
  return (
    <Carousel>
      {list.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt={item.name}
          className="w-full"
          width={600}
          height={300}
        />
      ))}
    </Carousel>
  )
}
