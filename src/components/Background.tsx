import { useMediaQuery, useTheme } from '@mui/material';
import bgimg from '../assets/img/backgroundsIcons/bg-image.png'
import { memo, CSSProperties } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
function Background(): JSX.Element {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const styleProps: CSSProperties = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
  }

  if (smDown && mdDown) {
    styleProps.height = '300%';
  }

  return (
    <>
      {!smDown && (
        <div className='flex flex-col w-full h-full' style={styleProps}></div>
      )}
      {smDown && mdDown && (
        <div className='flex flex-col w-full h-screen' style={styleProps}></div>
      )}
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Background)