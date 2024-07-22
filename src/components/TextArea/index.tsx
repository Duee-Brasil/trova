import { ClassAttributes, JSX, TextareaHTMLAttributes } from 'react'

export const TextArea = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLTextAreaElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className="w-full rounded-lg border-2 border-primary bg-white p-6"
      {...props}
    />
  )
}
