import { Link as RouterLink } from 'react-router-dom'
import Background from '../../components/Background'

export default function Errorpage() {
  return (
    <>
      <Background />
      <main className="grid min-h-min opacity-80 place-items-center relative px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center center pt-40">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Página não encontrada</h1>
          <p className="mt-6 text-base leading-7 text-white">Desculpa! não conseguimos encontrar esta página.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/home" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Voltar para Home
              </button>
            </RouterLink>
          </div>
        </div>
      </main >
    </>

  )
}
