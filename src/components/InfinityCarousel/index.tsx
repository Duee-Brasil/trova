'use client'
import Image from 'next/image'
import { FC, useMemo } from 'react'

export const InfinityCarousel: FC<{
  list: { src: string; name: string }[]
  size?: string
}> = ({ list, size = '7' }) => {
  const animationClass = useMemo(
    () => `animate-scroll${size} h-full w-auto aspect-square`,
    [size]
  )

  return (
    <div className="relative h-56 md:h-[400px] w-full overflow-hidden">
      <div className="flex flex-row gap-4">
        {list.map((item) => (
          <Image
            src={item.src}
            alt={item.name}
            key={item.name}
            width={400}
            height={400}
            quality={50}
            className={animationClass}
          />
        ))}
        {list.map((item) => (
          <Image
            src={item.src}
            alt={item.name}
            key={item.name}
            width={400}
            height={400}
            quality={50}
            className={animationClass}
          />
        ))}
      </div>
    </div>
  )
}
