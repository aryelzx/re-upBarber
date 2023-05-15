import { useMediaQuery, useTheme } from '@mui/material';
import Cards from './Cards';

function CardServices(): JSX.Element {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!smDown && (
        <div className='grid grid-flow-col space-x-14 relative '>
          <Cards />
        </div>
      )
      }
      {
        smDown && mdDown && (
          <div className='grid grid-flex-col relative top-28 gap-16'>
            <Cards />
          </div>
        )
      }
    </>
  )
}

export default CardServices