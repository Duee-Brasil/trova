'use client'
import { ButtonDefault } from '@/components/ButtonDefault'
import { Input } from '@/components/Input'
import { SessionTitle } from '@/components/SessionTitle'
import { TextArea } from '@/components/TextArea'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'

export default function Contato() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e?: any) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const message = `
      Nome: ${formData.get('name')}
      Telefone: ${formData.get('phone')}
      E-mail: ${formData.get('email')}
      Mensagem: ${formData.get('message')}
    `

    const link =
      'mailto:contato@trovabrasil.com' +
      '?subject=' +
      encodeURIComponent('Contato pelo site') +
      '&body=' +
      encodeURIComponent(message)
    window.location.href = link

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => console.log("Form successfully submitted"))
    //   .catch((error) => alert(error));
  }

  return (
    <main className="flex h-full w-screen flex-col items-center gap-16 p-8">
      <div className="-mx-8 -mt-8 w-screen">
        <Image
          src="/images/contato-hero.png"
          alt="Entre em contato"
          width={1920}
          height={512}
          className="h-auto w-screen"
        />
      </div>

      <SessionTitle label="entre em contato" align="left" />

      <div className="grid w-full max-w-screen-2xl grid-cols-1 items-baseline gap-4 p-16 text-3xl md:grid-cols-2 md:gap-16">
        <div className="gap-16">
          <p>+55 11 97069-3793</p>
          <p>+55 11 2532-7158</p>
          <p>contato@trovabrasil.com</p>
          <div className="my-4 -ml-14 flex items-center">
            <IoLocationSharp className="text-[4rem]" />
            <div className="ml-2">
              <p className="m-0 p-0">São Paulo - SP</p>
              <p className="m-0 p-0 text-2xl">
                Alameda Joaquim Eugênio de Lima, 696 - Jardins
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form
            name="contact"
            method="POST"
            target="_blank"
            data-netlify="true"
            onSubmit={handleSubmit}
            id="contact_form"
            className="flex w-full flex-col gap-12 text-3xl"
          >
            <div>
              <Input
                id="name"
                type="text"
                name="name"
                required
                pattern=".*\S.*"
                placeholder="Nome completo:"
              />
            </div>
            <div>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Telefone:"
                required
              />
            </div>
            <div>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Insira seu email:"
                required
              />
            </div>
            <div>
              <TextArea
                id="comment"
                name="message"
                placeholder="Insira sua mensagem:"
                required
                rows={3}
              />
            </div>

            <ButtonDefault
              type="submit"
              id="send_form"
              className="rounded-full"
            >
              Enviar
            </ButtonDefault>
          </form>
        </div>
      </div>
    </main>
  )
}
