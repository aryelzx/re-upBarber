import { Button, useTheme, useMediaQuery } from '@mui/material'
import bgimg from '../../assets/img/servicos/backgroundwaves.png'

function CardPricing(): JSX.Element {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>

      <div className="flex flex-col items-start w-80 h-[500px] rounded-xl  px-6 py-10 gap-7"
        style={{ backgroundImage: `url(${bgimg})` }}>
        <p className="w-16 h-5 text-2xl leading-[120%] center text-black">Básico</p>
        <p className="w-[274px] h-5 font-semibold text-2xl leading-[120%]">Cortes Sociais</p>
        <p className="w-fill h-5 text-xl opacity-70">Inclue</p>
        <ul className="pl-4">
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Corte Social <span className="font-semibold flex-row ml-12">R$15,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Corte Militar <span className="font-semibold flex-row ml-12">R$15,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Undercut <span className="font-semibold flex-row ml-20">R$20,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Coque Samurai <span className="font-semibold flex-row ml-5">R$20,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Corte Surfista <span className="font-semibold flex-row ml-10">R$15,00</span></span>
          </li>
          <li className="list-none py-3 pl-8">
            <Button
              className="w-40 h-10  bg-slate-100"
              sx={{ borderColor: 'black' }}
              variant="outlined"
            >
              <span className="text-black leading-[19%] text-XL">Agendar</span>
            </Button>
          </li>
        </ul >
      </div >
      <div className="flex flex-col items-start  w-80 h-[500px] rounded-xl px-6 py-10 gap-7"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <p className="w-16 h-5 text-2xl leading-[120%] center text-black">Degradê</p>
        <p className="w-[274px] h-5 font-semibold text-2xl leading-[120%]">Navalhado c/ Listras</p>
        <p className="w-fill h-5 text-xl opacity-70">Inclue</p>
        <ul className="pl-4">
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Fade Hair <span className="font-semibold flex-row ml-16">R$25,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg"> Mid Fade  <span className="font-semibold flex-row ml-16">R$25,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg"> Taper Fade <span className="font-semibold flex-row ml-12">R$25,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg"> High Fade <span className="font-semibold flex-row ml-16">R$25,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Low Fade <span className="font-semibold flex-row ml-16">R$25,00</span></span>
          </li>
          <li className="list-none py-3 pl-8">
            <Button
              className="w-40 h-10  bg-slate-100 "
              sx={{ borderColor: 'black' }}
              variant="outlined"
            >
              <span className="text-black leading-[19%] text-XL">Agendar</span>
            </Button>
          </li>
        </ul >
      </div >
      <div className="flex flex-col items-start  w-80 h-[500px] rounded-xl px-6 py-10 gap-7"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <p className="w-16 h-5 text-2xl leading-[120%] center text-black">Diversos</p>
        <p className="w-[274px] h-5 font-semibold text-2xl leading-[120%]">Luzes / Sobrancelha</p>
        <p className="w-fill h-5 text-xl opacity-70">Inclue</p>
        <ul className="pl-4">
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Luzes <span className="font-semibold flex-row ml-16">R$15,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Nevou <span className="font-semibold flex-row ml-14">R$25,00</span></span>
          </li>
          <li className="list-disc py-3">
            <span className="text-black leading-[19%] text-lg">Sobrancelha <span className="font-semibold flex-row ml-8">R$5,00</span></span>
          </li>
          <li className="list-none py-24 pl-8">
            <Button
              className="w-40 h-10  bg-slate-100"
              sx={{ borderColor: 'black' }}
              variant="outlined"
            >
              <span className="text-black leading-[19%] text-XL">Agendar</span>
            </Button>
          </li>
        </ul >
      </div >

    </>
  )
}

export default CardPricing