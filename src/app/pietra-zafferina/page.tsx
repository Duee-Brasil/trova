import { CarouselImages } from '@/components/CarouselImages'
import { InfinityCarousel } from '@/components/InfinityCarousel'
import { QualityCard } from '@/components/QualityCard'
import { ScrollableComponent } from '@/components/ScrollableComponent'
import { WppButton } from '@/components/WppButton'
import { imgsList } from '@/utils/contants'
import Image from 'next/image'

const infinityList = [
  {
    src: '/images/pietra/infinito/Prancheta 1.png',
    name: 'piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 2.png',
    name: 'interno da piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 3.png',
    name: 'externo piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 4.png',
    name: 'borda piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 5.png',
    name: 'detalhe piso interno piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 6.png',
    name: 'visao geral piscina',
  },
  {
    src: '/images/pietra/infinito/Prancheta 7.png',
    name: 'piscina borda infinita',
  },
]

const qualityList = [
  {
    image: '/images/icones/antiderrapante.png',
    label: 'Antiderrapante',
    text: (
      <p>
        Superfície natural que oferece aderência suficiente para tornar a pedra
        antiderrapante quando seca, garantindo segurança e mantendo um aspecto
        agradável e único. É indicado principalmente para áreas aquáticas.
      </p>
    ),
  },
  {
    image: '/images/icones/qualidade.png',
    label: 'Aquecimento',
    text: (
      <p>
        A Pietra Zafferina é uma solução eficiente e econômica para o
        aquecimento de piscinas ao ar livre, devido às suas propriedades
        térmicas que mantém a água aquecida. Isso resulta em uma economia de até
        40% nos custos com aquecimento, uma vez que a temperatura é facilmente
        regulada por meio da absorção da luz solar.
      </p>
    ),
  },
  {
    image: '/images/icones/estetica.png',
    label: 'Estética tropical',
    text: (
      <p>
        Sua textura única, tons de verde variando entre o claro e o escuro e o
        efeito vibrante quando em contato com a água são características que
        garantem sofisticação e exclusividade para seu projeto. Uma estética
        tropical, que traz movimento para a composição.
      </p>
    ),
  },
  {
    image: '/images/icones/manutencao.png',
    label: 'Pouca manutenção',
    text: (
      <p>
        O coeficiente de dilatação da Pietra Zafferina é extremamente baixo, o
        que confere uma grande vantagem quando aplicada em espaços que sofrem
        variação de temperatura. Essa característica impede o risco de
        rachaduras ou desprendimento da pedra, garantindo assim, maior
        durabilidade e menor custo de manutenção.
      </p>
    ),
  },
]

export default function PietraZafferina() {
  return (
    <main className="flex min-h-full w-screen flex-col items-center gap-16 overflow-x-hidden p-8">
      <div className="grid w-full  max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2">
        <div className="aspect-square w-full">
          <CarouselImages list={imgsList['pietra']} />
        </div>
        <div className="w-full">
          <h1 className="w-screen border-b-4 border-primary font-lato text-xl leading-loose">
            Pietra Zafferina
          </h1>
          <p>
            Com características únicas e marcantes, a Pietra Zafferina é o novo
            produto da Trova Brasil. Extraída de áreas geológicas específicas,
            ela se destaca por detalhes exclusivos que a tornam verdadeiramente
            singular.
          </p>
          <p>
            Quando utilizada como revestimento em piscinas, exibe um efeito de
            cores que varia de acordo com a profundidade da água e realça seus
            tons esverdeados. Os resultados obtidos conferem movimento e
            personalidade, adicionando um toque de sofisticação natural ao
            espaço.
          </p>
          <WppButton />
        </div>
      </div>
      <div className="grid w-full  max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p>
            A beleza da pedra de piscina Pietra Zafferina não apenas encanta,
            mas também cria uma sensação de tranquilidade e proximidade com a
            natureza. Sua resistência à dilatação garante segurança a sua
            capacidade de absorção do calor, proporciona uma experiência ainda
            mais agradável, mantendo a superfície aquecida e criando um
            equilíbrio térmico ideal para sua piscina.
          </p>
        </div>
        <div>
          <p>
            A Pietra Zafferina é a escolha inteligente para elevar o seu
            projeto, oferecendo uma combinação incomparável de beleza,
            sofisticação e funcionalidade. Sua capacidade de transformar o
            ambiente a torna uma opção excepcional para aqueles que buscam
            qualidade e sofisticação.
          </p>
        </div>
      </div>
      <div className="relative w-screen">
        <div className="absolute -z-50 h-[300px] w-screen bg-primary" />
      </div>

      <div className="flex w-full  max-w-screen-xl gap-8">
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
        <h1 className="w-1/2 md:w-1/3 self-start border-b-4 border-primary font-lato text-xl leading-loose">
          Compare
        </h1>

        <p>
          O piso para piscina Pietra Zafferina tem características estéticas
          semelhantes à pedra Hijau, como seu aspecto natural e cores que
          remetem ao mar. Porém apresentam diferenças significativas em termos
          de durabilidade, segurança e economia.
        </p>

        <div className="my-16 flex w-full flex-row justify-center gap-8">
          <Image
            src="/images/pietra/compare-1.png"
            alt="pietra zafferina"
            width={536}
            height={536}
          />
          <Image
            src="/images/pietra/compare-2.png"
            alt="pedra hijau"
            width={536}
            height={536}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex size-full flex-col gap-4 px-8 py-16">
            <Image
              src="/images/icones/durabilidade.png"
              alt="durabilidade"
              width={109}
              height={109}
              className="mx-auto my-4 w-20"
            />
            <div className="w-full text-balance">
              <p>
                <strong>Pietra Zafferina</strong>: Apresenta um coeficiente de
                dilatação extremamente baixo, o que a torna ideal para espaços
                sujeitos a variações de temperatura.
              </p>
              <p>
                Pedra Hijau: Por ser uma pedra vulcânica, a Hijau é mais
                vulnerável à dilatação em temperaturas elevadas, o que pode
                resultar em desprendimento da parede.
              </p>
            </div>
          </div>
          <div className="flex size-full flex-col gap-4 px-8 py-16">
            <Image
              src="/images/icones/eficiente.png"
              alt="eficiente"
              width={109}
              height={109}
              className="mx-auto my-4 w-20"
            />
            <div className="w-full text-balance">
              <p>
                <strong>Pietra Zafferina</strong>: Apresenta propriedades
                térmicas que mantêm a água aquecida, resultando em economia de
                até 40% nos custos com aquecimento.
              </p>
              <p>
                Pedra Hijau: Exige mão-de-obra qualificada para sua colocação e
                cuidados especiais na limpeza, que podem gerar altos custos.
              </p>
            </div>
          </div>
          <div className="flex size-full flex-col gap-4 px-8 py-16">
            <Image
              src="/images/icones/segurança.png"
              alt="segurança"
              width={109}
              height={109}
              className="mx-auto my-4 w-20"
            />
            <div className="w-full text-balance">
              <p>
                <strong>Pietra Zafferina</strong>: Possui uma superfície natural
                que oferece aderência suficiente para ser antiderrapante quando
                seca.
              </p>
              <p>
                Pedra Hijau: Sua dilatação também pode afetar a segurança,
                especialmente em áreas molhadas.
              </p>
            </div>
          </div>
          <div className="flex size-full flex-col gap-4 px-8 py-16">
            <Image
              src="/images/icones/acabamento.png"
              alt="acabamento"
              width={109}
              height={109}
              className="mx-auto my-4 w-20"
            />
            <div className="w-full text-balance">
              <p>
                <strong>Pietra Zafferina</strong>: Requer menos manutenção,
                devido à sua resistência à dilatação e suas propriedades
                térmicas.
              </p>
              <p>
                Pedra Hijau: Pode absorver impurezas, como óleos e protetor
                solar, exigindo cuidados especiais na limpeza.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  max-w-screen-xl">
        <h1 className="w-1/2 md:w-1/3 self-start border-b-4 border-primary font-lato text-xl leading-loose">
          Aplicações e Projetos
        </h1>

        <p>
          A Pietra Zafferina conta com diferentes possibilidades de aplicação,
          sendo elas, revestimentos para piscinas, pontes, espelhos d’ água,
          fachadas e áreas externas.
        </p>
      </div>
      <div className="h-auto w-screen">
        <InfinityCarousel list={infinityList} />
      </div>
    </main>
  )
}
