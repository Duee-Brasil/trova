import { FC } from 'react'

export const Title: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex w-screen items-center justify-center gap-10">
      <div className="flex-1 self-start border-t-4 border-primary" />
      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-24 border-4 border-b-0 border-solid border-primary" />
        <div className="user-select-none my-2 text-4xl text-white">trova</div>
        <h2 className="absolute my-2 text-4xl uppercase">{label}</h2>
        <div className="h-12 w-24 border-4 border-t-0 border-solid border-primary" />
      </div>
      <div className="flex-1 self-end border-t-4 border-primary" />
    </div>
  )
}
