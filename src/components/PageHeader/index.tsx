import Image from 'next/image'
import Link from 'next/link'

export const PageHeader = () => {
  return (
    <header className="m-0 flex w-screen flex-row justify-between bg-primary px-20 py-2 text-2xl text-white">
      <div>
        <Image
          src="/images/logos/logo_white.png"
          alt="Trova Brasil"
          width={200}
          height={150}
          className="w-48"
        />
      </div>

      <div className="inline-flex flex-1 items-center justify-end gap-12 uppercase">
        <Link href="/">Home</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/">Onde encontrar</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </header>
  )
}
