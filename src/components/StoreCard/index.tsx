import { FC } from 'react'

export interface IStoreCard {
  name: string
  phone?: string
  address?: string
  email?: string
  site?: string
}

export const StoreCard: FC<IStoreCard> = ({
  name,
  phone,
  address,
  email,
  site,
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h5 className="w-full text-balance text-4xl font-lato uppercase">
        {name}
      </h5>
      {phone && <p className="w-full text-balance text-2xl">{phone}</p>}
      {address && <p className="w-full text-balance text-2xl">{address}</p>}
      {email && <p className="w-full text-balance text-2xl">{email}</p>}
      {site && <p className="w-full text-balance text-2xl">{site}</p>}
    </div>
  )
}
