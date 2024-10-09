import Image from 'next/image'
import { FC } from 'react'

export const InfinityCarousel: FC<{
  list: { src: string; name: string }[]
  size?: string
}> = ({ list }) => {
  const duplicatedList = list.concat(list)

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-4">
        {duplicatedList.concat(duplicatedList).map((item, index) => (
          <div key={index} className="min-w-[400px]">
            <Image
              src={item.src}
              alt={item.name}
              width={400}
              height={400}
              quality={50}
              className="object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
