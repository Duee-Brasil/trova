import { ProductCard } from '@/components/ProductCard'
import { SessionTitle } from '@/components/SessionTitle'

const productsList = [
  {
    image: '/images/travertino.png',
    label: 'Mármore Travertino',
    text: (
      <p>
        A linha exclusiva de <strong>pedras Travertino</strong> possui veios
        sutis e é ideal para ser usada em{' '}
        <strong>áreas externas e internas</strong>, trazendo elegância e
        sofisticação ao seu projeto.
      </p>
    ),
    link: '/marmore-travertino',
  },
  {
    image: '/images/pietra.png',
    label: 'Pietra Zafferina',
    text: (
      <p>
        A <strong>Pietra Zafferina</strong> tem características únicas, se
        tornando perfeita para
        <strong>revestimentos de piscinas</strong>. Seus tons esverdeados criam
        movimento quando em contato com a água, evidenciando uma{' '}
        <strong>estética tropical</strong>.
      </p>
    ),
    link: '/pietra-zafferina',
  },
  {
    image: '/images/itauna.png',
    label: 'Itaúnas Tec',
    text: (
      <p>
        A <strong>pedra Itaúnas Tec</strong> é um material de{' '}
        <strong>tons claros e homogêneo</strong>, porém versátil, permitindo que
        sua aplicação seja feita em diferentes projetos, trazendo sutileza aos
        ambientes.
      </p>
    ),
    link: '/itaunas-tec',
  },
]

export default function OndeEncontrar() {
  return (
    <main className="flex h-full w-screen flex-col items-center justify-start gap-16 p-8">
      <SessionTitle label="Onde encontrar" align="left" />

      <div className="grid w-full max-w-screen-2xl grid-cols-1 items-baseline gap-4 p-4 md:grid-cols-3 md:gap-16">
        {productsList.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </main>
  )
}
