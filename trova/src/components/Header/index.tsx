import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-primary px-4 py-2 text-2xl text-white w-screen m-0">
      <div className="px-16">
        <Image
          src="/images/logos/logo_white.png"
          alt="Trova Brasil"
          width={200}
          height={150}
          className="w-48"
        />
      </div>

      <div className="inline-flex flex-1 items-center justify-end gap-12 uppercase">
        <a href="/">Home</a>
        <a href="/">Produtos</a>
        <a href="/">Onde encontrar</a>
        <a href="/">Contato</a>
      </div>
    </header>
  )
}
