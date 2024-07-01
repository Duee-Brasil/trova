import { ButtonHTMLAttributes, ClassAttributes, FC, JSX } from 'react'

export const Button = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className="border-4 border-primary bg-primary p-8 text-4xl text-white hover:bg-white hover:bg-opacity-60 hover:text-primary"
      {...props}
    />
  )
}
