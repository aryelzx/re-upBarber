import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Button, Drawer, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logomobile from '../../assets/img/backgroundsIcons/logomobile.png';
import SwipeableTemporaryDrawer from '../../components/menu-lateral/MenuLateral';


const navItems = ['home', 'serviços', 'portfólio', 'contato'];

function Navbar() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box height={theme.spacing(0)} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        bgcolor: (smDown ? 'black' : mdDown ? 'black' : 'transparent'), height: (!smDown ? '10%' : '15%'), paddingTop: '1rem', boxShadow: 'none'
      }}>
        < Toolbar >
          <Box
            component="div"
            width={theme.spacing(22)}
            sx={{ flexGrow: (smDown ? 0.7 : 0.5), padding: '0.5rem' }}
          >
            {smDown ? <img className="relative" src={logomobile} /> :
              <img className="w-5/6 top-2 relative " src={logomobile} />
            }
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <div className='gap-10  flex'>
              {navItems.map((item) => (
                <RouterLink to={`/${item.toLowerCase()}`} style={{ textDecoration: 'opacity: 0.8' }}>
                  <Button
                    key={item}
                    sx={{ color: '#F2DAC2' }}>
                    <Typography variant={smDown ? 'subtitle2' : mdDown ? 'subtitle1' : 'body1'} component="div" sx={{ flexGrow: 1 }}>
                      {item}
                    </Typography>
                  </Button>
                </RouterLink>
              ))}
            </div>
          </Box>

          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar >
      <Box component="nav">
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
        >
        </Drawer>
      </Box>
    </Box >
  );

}
export default Navbar;