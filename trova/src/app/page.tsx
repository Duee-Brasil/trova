import { Button } from '@/components/Button'
import { IconCard } from '@/components/IconCard'
import { Title } from '@/components/Title'
import { inspirationList } from '@/utils/inspirationList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-16 p-8 w-screen">
      <Title label="Sobre a trova" />
      <div className="flex w-full max-w-screen-2xl flex-row flex-wrap">
        <div className="basis-full text-2xl md:basis-1/2">
          <p>
            A Trova é especializada na importação do{' '}
            <strong>Travertino Romano</strong>.
          </p>
          <p>
            E por sermos especialistas, trazemos para o Brasil somente o
            Travertino <strong>nobre e de mais alta qualidade</strong> que
            existe na natureza.
          </p>
          <p>
            Nossos produtos são <strong>exclusivos</strong> no mercado nacional.
          </p>
        </div>
        <div className="basis-full text-2xl md:basis-1/2">
          <p>
            A seleção de todas nossas pedras, <strong>Travertino</strong>(Navona
            e Romano Premium), <strong>Pietra Zafferina</strong> e{' '}
            <strong>Itaúnas Tec</strong> é feita pessoalmente, garantindo
            procedência e um material de{' '}
            <strong>padrão estético superior e homogêneo</strong>.
          </p>
          <p>
            A Trova tem o compromisso de selecionar e entregar o melhor produto
            do mercado, por isso trabalhamos somente com as melhores pedreiras
            do mundo, oferecendo revestimentos de pisos que trazem{' '}
            <strong>sofisticação</strong> aos seus projetos.
          </p>
        </div>
      </div>
      <div className="grid w-full max-w-screen-2xl grid-cols-1 content-stretch justify-stretch gap-16 border-2 border-primary p-4 align-middle md:grid-cols-3 md:gap-4">
        <div className="justify-center self-stretch text-4xl uppercase">
          <Image
            src="/images/pedra solta T4.png"
            alt="mármore travertino"
            width={500}
            height={500}
            className="m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-10 p-0 text-center">
            <span className="bg-white px-4">mármore travertino</span>
          </div>
        </div>
        <div className="justify-center self-end text-4xl uppercase">
          <Image
            src="/images/pedra solta.png"
            alt="pietra zafferina"
            width={500}
            height={500}
            className=" m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-10 p-0 text-center">
            <span className="bg-white px-4">pietra zafferina</span>
          </div>
        </div>
        <div className="justify-center self-stretch text-4xl uppercase">
          <Image
            src="/images/pedra solta IT2.png"
            alt="itaúnas tec"
            width={500}
            height={500}
            className="m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-10 p-0 text-center">
            <span className="bg-white px-4">itaúnas tec</span>
          </div>
        </div>
      </div>
      <div className="my-16 h-[40rem] w-screen items-center justify-center bg-[url('/images/TROVA_110.png')] bg-cover align-middle">
        <div className="m-auto flex h-full max-w-screen-2xl flex-wrap items-center justify-around p-16">
          <Button>Faça seu orçamento</Button>
          <Button>Conheça nossas pedras</Button>
        </div>
      </div>
      <Title label="Inspire-se" />
      <div className="grid w-full max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        {inspirationList.map((item, index) => {
          return <IconCard {...item} key={index} />
        })}
      </div>
    </main>
  )
}
