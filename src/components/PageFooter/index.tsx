import { wppLink } from '@/utils/contants'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io5'

export const PageFooter = () => {
  return (
    <footer className="m-0 w-screen justify-center bg-primary px-4 py-2 text-white">
      <div className="m-auto flex max-w-screen-2xl flex-row flex-wrap items-center justify-center gap-12 p-6 md:justify-between">
        <div className="px-16">
          <Image
            src="/images/logos/logo_white.png"
            alt="Trova Brasil"
            width={200}
            height={150}
            className="w-64"
          />
          <div className="flex items-center font-lato text-lg">
            <IoLocationSharp />
            <span className="ml-2">
              Alameda Joaquim Eugênio de Lima, 696 - Jardins
            </span>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap justify-around gap-16 px-8 text-6xl">
          <a href="https://facebook.com/trovabrasil" target="_blanc">
            <span className="hidden size-0">facebook</span>
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com/trovatravertino" target="_blanc">
            <span className="hidden size-0">instagram</span>
            <IoLogoInstagram />
          </a>
          <a href={wppLink} target="_blanc">
            <span className="hidden size-0">whatsapp</span>
            <IoLogoWhatsapp />
          </a>
        </div>

        <div className="flex flex-col items-start justify-end gap-2 px-16 text-sm uppercase">
          <Link href="/">Home</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/">Onde encontrar</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </footer>
  )
}
