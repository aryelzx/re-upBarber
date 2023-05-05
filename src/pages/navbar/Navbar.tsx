import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Button, Drawer, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logomobile from '../../assets/img/logomobile.png';
import SwipeableTemporaryDrawer from '../../components/menu-lateral/MenuLateral';


const navItems = ['home', 'servicos', 'agendamento', 'contato'];

function Navbar() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box height={theme.spacing(0)} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        bgcolor: (smDown ? 'black' : mdDown ? 'black' : 'transparent'), height: '10%', paddingTop: '1rem', boxShadow: 'none'
      }}>
        < Toolbar >
          <Box
            component="div"
            width={theme.spacing(22)}
            sx={{ flexGrow: (smDown ? 0.7 : 0.5), padding: '0.5rem' }}
          >
            <img className="w-80" src={logomobile} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <div className='gap-10 flex'>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: '#F2DAC2' }}>
                  <Typography variant={smDown ? 'subtitle2' : mdDown ? 'subtitle1' : 'body1'} component="div" sx={{ flexGrow: 1 }}>
                    <RouterLink to={`/${item.toLowerCase()}`} style={{ textDecoration: 'opacity: 0.8' }}>
                      {item}
                    </RouterLink>
                  </Typography>
                </Button>
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