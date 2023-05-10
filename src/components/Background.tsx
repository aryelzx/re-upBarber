import { useMediaQuery, useTheme } from '@mui/material';
import bgimg from '../assets/img/backgroundsIcons/bg-image.png'
import { memo } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
function Background() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!smDown && (
        <div className='flex flex-col w-full h-full'
          style={{
            backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', position: 'absolute', backgroundRepeat: 'no-repeat'
          }}
        ></div>
      )}
      {smDown && mdDown && (
        <div className='flex flex-col w-full h-screen'
          style={{
            backgroundImage: `url(${bgimg})`, position: 'absolute', backgroundRepeat: 'no-repeat', height: '250vh', backgroundSize: 'cover'
          }}
        ></div>
      )}
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Background)