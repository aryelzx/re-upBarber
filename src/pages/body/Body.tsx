import { Box, Link, useTheme, useMediaQuery } from '@mui/material'

import bgimgmobile from '../../assets/img/bgmobile.png'
import Background from '../../components/Background';
import wppIcon from '../../assets/img/wppicon.png'

function Body() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div>
      {!smDown && (
        <>
          <Background />
          <div className='column pt-44 pl-20 w-auto'>
            <p className='font-karantina tracking-wider text-[#F2DAC2] font-bold text-8xl  leading-20 pb-2 relative'>JOÃO VICTOR</p>
            <p className='font-karantina text-[#977656] font-bold text-6xl pb-4 relative'>BARBEIRO</p>
            <p className='font-inter text-[##F2DAC2] opacity-60 leading-loose text-white text-1xl max-w-lg relative'>Me chamo Joao Victor Celestino Façanha. Tenho 19 anos, natural de Fortaleza, à mais ou menos 2 anos venho tentando ganhar a vida fazendo o que eu sei de melhor, cortar cabelo. Disposto a dar um "tapa" no seu visual, me disponibilizo a ir até você. Fique à vontade para entrar em contato comigo.</p>
          </div>
        </>
      )}
      {smDown && (
        <div className='flex flex-col w-full h-screen'
          style={{
            backgroundImage: `url(${bgimgmobile})`, backgroundSize: 'cover', position: 'absolute', backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='column pt-32 pl-4 w-auto'>
            <h1 className='font-karantina tracking-wider text-[#F2DAC2] font-bold text-5xl leading-20 pb-2 relative'>JOÃO VICTOR</h1>
            <h2 className='font-karantina  text-[#977656] font-bold text-4xl pb-4 relative'>BARBEIRO</h2>
            <p className='font-inter text-[##F2DAC2] opacity-60 leading-loose text-white text-sm max-w-xs relative'>Me chamo Joao Victor Celestino Façanha. Tenho 19 anos, natural de Fortaleza, à mais ou menos 2 anos venho tentando ganhar a vida fazendo o que eu sei de melhor, cortar cabelo. Disposto a dar um "tapa" no seu visual, me disponibilizo a ir até você. Fique à vontade para entrar em contato comigo.</p>
            <Box className='flex flex-row top-24 left-64 relative w-16 h-16 opacity-90 cursor-pointer'>
              <a href='https://api.whatsapp.com/send?phone=5585992618797&text=Ol%C3%A1%2C%20Jo%C3%A3o%20Victor%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20voc%C3%AA.' target='_blank' rel='noreferrer'>
                <img src={wppIcon} alt='wppIcon' className='w-16 h-16 ' />
              </a>
            </Box>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Body