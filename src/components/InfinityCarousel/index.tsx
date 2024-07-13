import Image from 'next/image'
import { FC } from 'react'

export const InfinityCarousel: FC<{
  list: { src: string; name: string }[]
  size?: string
}> = ({ list, size }) => {
  const animationClass =
    size === '6' ? 'animate-scroll6  h-full' : 'animate-scroll7  h-full'

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="flex flex-row gap-4">
        {list.map((item) => (
          <Image
            src={item.src}
            alt={item.name}
            key={item.name}
            width={400}
            height={400}
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
            className={animationClass}
          />
        ))}
      </div>
    </div>
  )
}
