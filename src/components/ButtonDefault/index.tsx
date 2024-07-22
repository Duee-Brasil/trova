import { ButtonHTMLAttributes, ClassAttributes, JSX } from 'react'

export const ButtonDefault = ({
  className,
  ...props
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`border-4 border-primary bg-primary p-4 text-lg text-white hover:bg-white hover:bg-opacity-60 hover:text-primary disabled:border-none disabled:bg-slate-100 disabled:text-slate-300 ${className}`}
      {...props}
    />
  )
}
