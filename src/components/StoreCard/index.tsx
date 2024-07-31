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
    <div className="flex w-full flex-col items-center">
      <h5 className="w-full text-balance text-lg font-lato uppercase">
        {name}
      </h5>
      {phone && <p className="w-full text-balance text-sm">{phone}</p>}
      {address && <p className="w-full text-balance text-sm">{address}</p>}
      {email && <p className="w-full text-balance text-sm">{email}</p>}
      {site && <p className="w-full text-balance text-sm">{site}</p>}
    </div>
  )
}
