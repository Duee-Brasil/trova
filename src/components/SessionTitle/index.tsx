import { FC } from 'react'

export const SessionTitle: FC<{ label: string; align?: 'left' | 'right' }> = ({
  label,
  align,
}) => {
  return (
    <div className="flex w-screen items-center justify-center gap-8">
      {align === 'left' ? (
        <div className="w-14 self-start" />
      ) : (
        <div className="flex-1 self-start border-t-2 border-primary" />
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="h-10 w-20 border-2 border-b-0 border-solid border-primary" />
        <div className="user-select-none my-2 text-xl text-white">trova</div>
        <h2 className="absolute my-2 text-xl uppercase">{label}</h2>
        <div className="h-10 w-20 border-2 border-t-0 border-solid border-primary" />
      </div>
      {align === 'right' ? (
        <div className="w-14 self-start" />
      ) : (
        <div className="flex-1 self-end border-t-2 border-primary" />
      )}
    </div>
  )
}
