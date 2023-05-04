import { Box, useTheme, useMediaQuery } from '@mui/material'

import bgimg from '../../assets/img/bg-image.png'

function Body() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Box height='100vh' display='flex' flexDirection='column'>
        <div className='column pt-4'>
          <h1 className='text-white '>JOÃO VICTOR</h1>
          <h2 className='text-white'>BARBEIRO</h2>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic et dolores aliquam possimus nesciunt nulla quam doloremque quia earum. Corporis nostrum nesciunt deserunt sequi</p>
        </div>
      </Box >
    </div >
  )
}

export default Body