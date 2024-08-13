import { SessionTitle } from '@/components/SessionTitle'
import { StoreCard } from '@/components/StoreCard'
import { stores } from '@/utils/stores'

export default function OndeEncontrar() {
  return (
    <main className="flex flex-1 w-screen flex-col items-center justify-start gap-16 p-8">
      <SessionTitle label="Onde encontrar" align="left" />

      {stores.map((stores, index) => (
        <div key={index} className="w-full  max-w-screen-xl my-8">
          <h4 className="w-full text-balance text-xl font-lato mb-12">
            {stores.title}
          </h4>
          <div
            key={index}
            className="grid w-full grid-cols-1 items-baseline md:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
          >
            {stores.itens.map((store, i) => (
              <StoreCard key={i} {...store} />
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
