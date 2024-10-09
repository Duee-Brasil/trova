'use client'
import { Navbar } from 'flowbite-react/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const theme = {
  root: {
    base: 'm-0 w-screen px-8 md:px-16 py-2 bg-primary text-md text-white h-fit',
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
      fluid: {
        on: '',
        off: 'container',
      },
    },
  },
  brand: {
    base: 'flex items-center',
  },
  collapse: {
    base: 'w-full md:block md:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },
  link: {
    base: 'block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-white uppercase font-lato leading-6 md:border-0',
    active: {
      on: 'bg-white/[.2] md:bg-transparent md:border-b md:border-gray-100',
      off: 'hover:font-extrabold hover:scale-105',
    },
    disabled: {
      on: 'text-gray-400 hover:cursor-not-allowed',
      off: '',
    },
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-white bg-primary hover:bg-white hover:text-primary hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden',
    icon: 'h-6 w-6 shrink-0',
  },
}

export const PageHeader = () => {
  const pathname = usePathname()

  return (
    <Navbar fluid theme={theme}>
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/images/logos/logo_white.webp"
          alt="Trova Brasil"
          width={200}
          height={150}
          quality={70}
          // placeholder="blur"
          className="w-48"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={pathname === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/produtos" active={pathname === '/produtos'}>
          Produtos
        </Navbar.Link>
        <Navbar.Link
          href="/onde-encontrar"
          active={pathname === '/onde-encontrar'}
        >
          Onde encontrar
        </Navbar.Link>
        <Navbar.Link href="/contato" active={pathname === '/contato'}>
          Contato
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
