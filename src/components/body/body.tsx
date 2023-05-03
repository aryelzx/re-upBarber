import { Box } from '@mui/material'
import bgimg from '../../assets/img/bg-image.png'
function Body() {

  return (
    <div
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Box height='100vh' display='flex' flexDirection='column' gap={1}>
        <div className='flex bg-center pt-6'>
          teste
        </div>
      </Box>
    </div>
  )
}

export default Body