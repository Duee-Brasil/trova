'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

export const CarouselImages: FC<{
  list: { src: string; name: string }[]
  square?: boolean
}> = ({ list, square = false }) => {
  return (
    <Carousel
      className="rounded-none"
      slideInterval={5000}
      theme={{
        scrollContainer: {
          base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth',
        },
      }}
    >
      {list.map((item, index) => (
        <div
          key={index}
          className={`w-full h-full rounded-none ${square ? 'aspect-square' : undefined}`}
        >
          <Image
            src={item.src}
            alt={item.name}
            className={`w-full h-full rounded-none overflow-hidden object-cover ${square ? 'aspect-square' : undefined}`}
            quality={70}
            fill={true}
            priority={true}
          />
        </div>
      ))}
    </Carousel>
  )
}
