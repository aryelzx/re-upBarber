import { useTheme, useMediaQuery } from '@mui/material'
import CardPricing from './CardPricing'

function PricingTable() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {!smDown && (
        <div className='grid grid-flow-col space-x-16 relative '>
          <CardPricing />
        </div>
      )
      }
      {
        smDown && mdDown && (
          <div className='flex flex-col relative top-56 gap-16 h-[300vh]'>
            <CardPricing />
          </div>
        )
      }
    </>
  )
}

export default PricingTable