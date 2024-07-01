import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="m-0 w-screen bg-primary px-4 py-2 text-white">
      <div className="flex max-w-screen-2xl flex-row flex-wrap-reverse justify-between">
        <div className="px-16">
          <Image
            src="/images/logos/logo_white.png"
            alt="Trova Brasil"
            width={200}
            height={150}
            className="w-48"
          />
        </div>

        <div className="flex flex-col items-start justify-end gap-2 text-lg uppercase">
          <a href="/">Home</a>
          <a href="/">Produtos</a>
          <a href="/">Onde encontrar</a>
          <a href="/">Contato</a>
        </div>
      </div>
    </footer>
  )
}
