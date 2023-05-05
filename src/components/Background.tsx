import bgimg from '../assets/img/bg-image.png'
import { memo } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
function Background() {
  return (
    <div className='flex flex-col w-full h-screen'
      style={{
        backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', position: 'absolute', backgroundRepeat: 'no-repeat'
      }}
    ></div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Background)