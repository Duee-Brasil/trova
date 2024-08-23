import { CarouselImages } from '@/components/CarouselImages'
import { InfinityCarousel } from '@/components/InfinityCarousel'
import { QualityCard } from '@/components/QualityCard'
import { ScrollableComponent } from '@/components/ScrollableComponent'
import { WppButton } from '@/components/WppButton'
import { imgsList } from '@/utils/contants'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const infinityList = [
  {
    src: '/images/travertino/infinito/Prancheta 1.png',
    name: 'piso externo',
  },
  {
    src: '/images/travertino/infinito/Prancheta 2.png',
    name: 'piso interno',
  },
  {
    src: '/images/travertino/infinito/Prancheta 3.png',
    name: 'piscina',
  },
  {
    src: '/images/travertino/infinito/Prancheta 4.png',
    name: 'area externa',
  },
  {
    src: '/images/travertino/infinito/Prancheta 5.png',
    name: 'piso interno',
  },
  {
    src: '/images/travertino/infinito/Prancheta 6.png',
    name: 'piso externo',
  },
  {
    src: '/images/travertino/infinito/Prancheta 7.png',
    name: 'escada',
  },
]

const qualityList = [
  {
    image: '/images/icones/atermico.png',
    label: 'Atérmico',
    text: (
      <p>
        O Travertino é atérmico, sendo perfeito para projetos que precisam ser
        arejados, áreas internas, externas e revestimento de fogos de chão e
        lareiras.
      </p>
    ),
  },
  {
    image: '/images/icones/qualidade.png',
    label: 'Qualidade Superior',
    text: (
      <p>
        Além da qualidade superior, o Travertino da Trova é versátil, elegante,
        seguro e durável. Ambos os Travertinos podem ser aplicados de forma
        natural, bruta, sem brilho, resina ou demais acabamentos preferíveis.
      </p>
    ),
  },
  {
    image: '/images/icones/antiderrapante.png',
    label: 'Antiderrapante',
    text: (
      <p>
        É antiderrapante, sendo indicado para áreas como piscinas, degraus e
        banheiros, garantindo segurança para seu piso.
      </p>
    ),
  },
]

export default function Travertino() {
  return (
    <main className="flex flex-1 w-screen flex-col items-center gap-16 overflow-x-hidden p-8">
      <div className="grid w-full  max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2">
        <div className="aspect-square w-full">
          <CarouselImages list={imgsList['travertino']} square />
        </div>
        <div className="w-full">
          <h1 className="w-screen border-b-4 border-primary font-lato text-xl leading-loose">
            Mármore Travertino
          </h1>
          <p>
            A Trova trabalha com o Travertino Romano Premium e o Navona, pois
            são os melhores Travertinos encontrados na natureza.
          </p>
          <p>
            Os <strong>mármores Travertino</strong> da Trova destacam-se por sua
            composição homogênea, de cores claras, veios discretos e a origem de
            sua formação geológica.
          </p>
          <p>
            Garantimos a uniformidade e homogeneidade do projeto, entregando
            peças em ladrilhos, com a mesma padronagem de cor e de veios,
            evidenciando a sutileza e sofisticação do ambiente.
          </p>
          <WppButton />
        </div>
      </div>
      <div className="grid w-full  max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h3 className="font-lato text-lg">Romano Premium</h3>
          <p>
            São pedras com tonalidade clara e homogênea, entre palha e areia,
            possui veios sutis e furinhos mais discretos.
          </p>
        </div>
        <div>
          <h3 className="font-lato text-lg">Navona</h3>
          <p>
            Sua cor é mais clara, chamada “cor de osso”. Possui veios ondulados
            e mais discretos. Com menos espaços ocos e mais uniforme, esse tipo
            possui caráter mais exclusivo e raro.
          </p>
        </div>
      </div>
      <div className="relative w-screen">
        <div className="absolute -z-50 h-[300px] w-screen bg-primary" />
      </div>

      <div className="w-full  max-w-screen-xl">
        <ScrollableComponent>
          {qualityList.map((item, index) => (
            <QualityCard
              key={index}
              image={item.image}
              label={item.label}
              text={item.text}
            />
          ))}
        </ScrollableComponent>
      </div>
      <div className="w-full  max-w-screen-xl">
        <h1 className="w-full md:w-1/2 lg:w-1/3 self-start border-b-4 border-primary font-lato text-xl leading-loose">
          Aplicações e Projetos
        </h1>

        <p>
          A aplicação do mármore Travertino da Trova pode ser realizada em
          diferentes espaços, como piso, escada externa, lavabo, bancada de
          banheiro, lareira, revestimentos de piscina e parede.
        </p>
      </div>
      <div className="h-auto w-screen hidden md:block">
        <InfinityCarousel list={infinityList} />
      </div>
      <div className="aspect-video w-screen md:hidden flex overflow-x-auto gap-2">
        {infinityList.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.name}
            className={`w-[90%] rounded-none aspect-video`}
            width={600}
            height={300}
            quality={70}
            // // placeholder="blur"
          />
        ))}
      </div>
      <div className="mb-16 flex h-auto w-screen justify-center">
        <div className="aspect-video h-auto w-3/4 2xl:w-1/2">
          <YouTubeEmbed
            videoid="6iB9bEHn78s"
            height={450}
            params="controls=0"
          />
        </div>
      </div>
    </main>
  )
}
