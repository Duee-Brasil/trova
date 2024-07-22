import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface IQualityCard {
  image: string
  label: string
  text: ReactNode
}

export const QualityCard: FC<IQualityCard> = ({ image, label, text }) => {
  return (
    <div className="flex min-w-96 max-w-[450px] flex-1 flex-col gap-4 border-2 border-neutral-400 bg-white p-12">
      <Image
        src={image}
        alt={label}
        width={109}
        height={109}
        className="mx-auto my-4 w-20"
      />
      <h3 className="text-center font-lato text-lg">{label}</h3>
      <div className="w-full text-balance">{text}</div>
    </div>
  )
}
