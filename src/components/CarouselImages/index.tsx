'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import { FC } from 'react'

export const CarouselImages: FC<{ list: { src: string; name: string }[] }> = ({
  list,
}) => {
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
        <Image
          key={index}
          src={item.src}
          alt={item.name}
          className="w-full rounded-none"
          width={600}
          height={300}
        />
      ))}
    </Carousel>
  )
}
