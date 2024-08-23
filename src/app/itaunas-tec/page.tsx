import { CarouselImages } from '@/components/CarouselImages'
import { InfinityCarousel } from '@/components/InfinityCarousel'
import { QualityCard } from '@/components/QualityCard'
import { ScrollableComponent } from '@/components/ScrollableComponent'
import { WppButton } from '@/components/WppButton'
import { imgsList } from '@/utils/contants'
import Image from 'next/image'

const infinityList = [
  {
    src: '/images/itauna-tec/infinito/Prancheta 1.png',
    name: 'chapas de itaunas',
  },
  {
    src: '/images/itauna-tec/infinito/Prancheta 2.png',
    name: 'chapas de itaunas',
  },
  {
    src: '/images/itauna-tec/infinito/Prancheta 3.png',
    name: 'chapas de itaunas',
  },
  {
    src: '/images/itauna-tec/infinito/Prancheta 4.png',
    name: 'chapas de itaunas',
  },
  {
    src: '/images/itauna-tec/infinito/Prancheta 5.png',
    name: 'chapas de itaunas',
  },
  {
    src: '/images/itauna-tec/infinito/Prancheta 6.png',
    name: 'chapas de itaunas',
  },
]

const qualityList = [
  {
    image: '/images/icones/durabilidade.png',
    label: 'Durabilidade',
    text: (
      <p>
        O tratamento antioxidante, que isola o óxido de ferro (Fe2O3) dos outros
        componentes, garante durabilidade e qualidade superior. O material não
        sofre com as manchas causadas pela oxidação e mantém a estética original
        por muito mais tempo.
      </p>
    ),
  },
  {
    image: '/images/icones/qualidade.png',
    label: 'Qualidade Superior',
    text: (
      <>
        <p>
          Sua composição clara, granulada e homogênea permite a aplicação do
          Itaúnas Tec em diferentes projetos de decoração, trazendo sofisticação
          e sutileza aos ambientes.
        </p>
        <p>
          Sua beleza única e marcante chama atenção pelos seus veios naturais e
          claros, resultado da sua formação geológica. Os grãos finos e médios
          conferem à pedra uma estética leve e agradável.
        </p>
      </>
    ),
  },
  {
    image: '/images/icones/acabamento.png',
    label: 'Acabamento Prático',
    text: (
      <p>
        Por ser aplicada com um acabamento liso, a pedra Itaúnas Tec oferece
        praticidade e um ótimo acabamento para superfícies. Prático e funcional,
        é uma excelente opção para pisos e revestimentos.
      </p>
    ),
  },
]

export default function Itaunas() {
  return (
    <main className="flex flex-1 w-screen flex-col items-center gap-16 overflow-x-hidden p-8">
      <div className="grid w-full  max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2">
        <div className="aspect-square w-full rounded-none">
          <CarouselImages list={imgsList['itaunas']} square />
        </div>
        <div className="w-full">
          <h1 className="w-screen border-b-4 border-primary font-lato text-xl leading-loose">
            Itaúnas Tec
          </h1>
          <p>
            O Itaúnas Tec encanta com seus tons mais claros, grãos finos e
            acabamento liso. A nova pedra para revestimento de piso chega à
            Trova Brasil com uma nova proposta, que vai além da beleza.
          </p>
          <p>
            Com um tratamento antioxidante exclusivo, o piso de pedras Itaúnas
            Tec se transforma em um material de alta qualidade, com uma beleza
            estética superior e capaz de resistir às marcas do tempo.
          </p>
          <WppButton />
        </div>
      </div>
      <div className="w-full  max-w-screen-xl">
        <p>
          A singularidade do nosso processo reside na separação do óxido de
          ferro (Fe2O3), conhecido como hematita, um diferencial que não apenas
          garante durabilidade, mas também confere delicadeza e suavidade, que
          permanecem inalteradas com o passar dos anos.
        </p>
        <p>
          Com a Trova Brasil é possível ter um material homogêneo, versátil e
          com poucos veios. O Itaúnas Tec é a fusão entre durabilidade e a
          essência da beleza atemporal.
        </p>
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
          O Itaúnas Tec pode ser aplicado em áreas externas e internas, como
          pisos, paredes e escadas.
        </p>
      </div>
      <div className="h-auto w-screen hidden md:block">
        <InfinityCarousel list={infinityList} size="6" />
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
    </main>
  )
}
