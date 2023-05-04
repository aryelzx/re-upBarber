import { Box, useTheme, useMediaQuery } from '@mui/material'
import bgimg from '../../assets/img/bg-image.png'
import bgimgmobile from '../../assets/img/bgmobile.png'

function Body() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <div className='flex flex-col w-full h-screen'
        style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', position: 'absolute' }}
      >
        <div className='column pt-44 pl-20 w-auto'>
          <h1 className='font-karantina tracking-wider text-[#F2DAC2] font-bold text-8xl  leading-20 pb-2'>JOÃO VICTOR</h1>
          <h2 className='font-karantina text-[#977656] font-bold text-6xl pb-4'>BARBEIRO</h2>
          <p className='font-inter text-[##F2DAC2] opacity-60 leading-loose text-white text-1xl max-w-lg'>Me chamo Joao Victor Celestino Façanha. Tenho 19 anos, natural de Fortaleza, à mais ou menos 2 anos venho tentando ganhar a vida fazendo o que eu sei de melhor, cortar cabelo. Disposto a dar um "tapa" no seu visual, me disponibilizo a ir até você. Fique à vontade para entrar em contato comigo.</p>
        </div>
      </div>
      {smDown && (
        <div className='flex flex-col w-screen h-screen'
          style={{ backgroundImage: `url(${bgimgmobile})`, backgroundSize: 'cover', position: 'absolute', height: '130vh' }}
        >
          <Box height='100vh' display='flex' flexDirection='column'>
            <div className='column pt-24 pl-4 w-auto'>
              <h1 className='font-karantina tracking-wider text-[#F2DAC2] font-bold text-5xl leading-20 pb-2'>JOÃO VICTOR</h1>
              <h2 className='font-karantina  text-[#977656] font-bold text-4xl pb-4'>BARBEIRO</h2>
              <p className='font-inter text-[##F2DAC2] opacity-60 leading-loose text-white text-sm max-w-xs'>Me chamo Joao Victor Celestino Façanha. Tenho 19 anos, natural de Fortaleza, à mais ou menos 2 anos venho tentando ganhar a vida fazendo o que eu sei de melhor, cortar cabelo. Disposto a dar um "tapa" no seu visual, me disponibilizo a ir até você. Fique à vontade para entrar em contato comigo.</p>
            </div>
          </Box>
        </div>
      )
      }
    </>
  )
}

export default Body