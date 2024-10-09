import Image from 'next/image'
import { FC } from 'react'

export interface IIConCard {
  icon: string
  image: string
  name: string
}

export const IconCard: FC<IIConCard> = ({ name, icon, image }) => {
  return (
    <div className="m-0 flex w-full flex-row items-center gap-1 border-b-2 border-transpBlue px-4 py-8 text-sm">
      <div className="w-[10ch] sm:w-[16ch]">
        <Image
          src={icon}
          alt={name}
          width={60}
          height={60}
          quality={50}
          // placeholder="blur"
          className="m-auto w-[60px] aspect-square"
        />
        <p className="w-full overflow-hidden text-ellipsis text-balance text-center uppercase">
          {name}
        </p>
      </div>
      <div className="w-full flex-1">
        <Image
          src={image}
          alt={name}
          width={630}
          height={341}
          quality={70}
          // placeholder="blur"
          className="w-full"
        />
      </div>
    </div>
  )
}
