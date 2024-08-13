import { ClassAttributes, InputHTMLAttributes, JSX } from 'react'

export const Input = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <input
      className="w-full rounded-lg border-2 border-primary bg-white p-6"
      {...props}
    />
  )
}
