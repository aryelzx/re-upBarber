import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";

interface ILayoutBaseNavProps {
  children: React.ReactNode
  title: string
}

export function LayoutBaseNav(props: ILayoutBaseNavProps) {
  const { children, title } = props

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box height='100vh' display='flex' flexDirection='column' gap={1}>
      <Box component='header' sx={{ flexGrow: 0.25, display: { xs: 'none', sm: 'block' } }}>
        <Typography variant='h1' component='div'>
          <img className='w-72' src='https://via.placeholder.com/300x100' alt='logo' />
        </Typography>
      </Box>

      <Typography
        variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        {title}
      </Typography>

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}
