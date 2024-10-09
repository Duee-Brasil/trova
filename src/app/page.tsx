import { CarouselImages } from '@/components/CarouselImages'
import { IconCard } from '@/components/IconCard'
import { LinkButton } from '@/components/LinkButton'
import { SessionTitle } from '@/components/SessionTitle'
import { wppLink } from '@/utils/contants'
import { inspirationList } from '@/utils/inspirationList'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'
import Link from 'next/link'

const imgsList = [
  {
    src: '/images/carousel/01.webp',
    name: 'chapa travertino',
  },
  {
    src: '/images/carousel/02.webp',
    name: 'pietra zafferina na piscina',
  },
  {
    src: '/images/carousel/03.webp',
    name: 'travertino em piso externo',
  },
  {
    src: '/images/carousel/04.webp',
    name: 'pietra zafferina na piscina',
  },
  {
    src: '/images/carousel/05.webp',
    name: 'travertino em escada',
  },
  {
    src: '/images/carousel/06.webp',
    name: 'pietra zafferina na piscina de borda infinita',
  },
  {
    src: '/images/carousel/07.webp',
    name: 'revestimento externo com travertino',
  },
]

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden m-auto flex flex-col items-center justify-center gap-16 p-8 pt-0 mt-0">
      <div className="h-36 w-screen md:h-64 lg:h-[21rem] aspect-auto">
        <CarouselImages list={imgsList} />
      </div>

      <SessionTitle label="Sobre a trova" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl">
        <div className="w-full">
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
        <div className="w-full">
          <p>
            A seleção de todas nossas pedras, <strong>Travertino</strong>{' '}
            (Navona e Romano Premium), <strong>Pietra Zafferina</strong> e{' '}
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
      <div className="hidden md:grid w-full grid-cols-1 max-w-screen-xl content-stretch justify-stretch gap-4 align-middle">
        <Image
          src={'/images/pedra solta.webp'}
          alt="pietra zafferina"
          width={1920}
          height={500}
          quality={70}
          className="m-auto max-w-full"
        />
        <div className="justify-around text-xl uppercase w-full flex">
          <span className="bg-white px-4 flex-1 text-center">
            <Link href={'/marmore-travertino'}>mármore travertino</Link>
          </span>
          <span className="bg-white px-4 flex-1 text-center">
            <Link href={'/pietra-zafferina'}>pietra zafferina</Link>
          </span>
          <span className="bg-white px-4 flex-1 text-center">
            <Link href={'/itaunas-tec'}>itaúnas tec</Link>
          </span>
        </div>
      </div>
      <div className="grid md:hidden w-full grid-cols-1 content-stretch max-w-screen-xl justify-stretch gap-16 p-4 align-middle">
        <div className="justify-center self-stretch text-xl uppercase">
          <Image
            src="/images/pedra solta T4.webp"
            alt="mármore travertino"
            width={500}
            height={500}
            quality={70}
            className="m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-8 p-0 text-center">
            <span className="bg-white px-4">
              <Link href={'/marmore-travertino'}>mármore travertino</Link>
            </span>
          </div>
        </div>
        <div className="justify-center self-end text-xl uppercase">
          <Image
            src="/images/pedra solta pietra.webp"
            alt="pietra zafferina"
            width={500}
            height={500}
            quality={70}
            className="m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-8 p-0 text-center">
            <span className="bg-white px-4">
              <Link href={'/pietra-zafferina'}>pietra zafferina</Link>
            </span>
          </div>
        </div>
        <div className="justify-center self-stretch text-xl uppercase">
          <Image
            src="/images/pedra solta IT2.webp"
            alt="itaúnas tec"
            width={500}
            height={500}
            quality={70}
            className="m-auto max-w-full"
          />
          <div className="m-0 w-full translate-y-8 p-0 text-center">
            <span className="bg-white px-4">
              <Link href={'/itaunas-tec'}>itaúnas tec</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="my-16 h-[32rem] w-screen items-center justify-center bg-[url('/images/TROVA_110.webp')] bg-cover align-middle">
        <div className="m-auto flex h-full  max-w-screen-xl flex-wrap items-center justify-around p-16">
          <LinkButton href={wppLink} target="_blank">
            Faça seu orçamento
          </LinkButton>
          <LinkButton href="/produtos">Conheça nossas pedras</LinkButton>
        </div>
      </div>
      <div className="mb-16 flex h-auto w-screen justify-center">
        <div className="aspect-video h-auto w-3/4 max-w-screen-xl items-center">
          <YouTubeEmbed
            videoid="FgT37Fiqk8M"
            height={450}
            params="controls=0"
            style="margin: auto"
          />
        </div>
      </div>
      <SessionTitle label="Inspire-se" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 max-w-screen-xl">
        {inspirationList.map((item, index) => {
          return <IconCard {...item} key={index} />
        })}
      </div>
    </main>
  )
}
