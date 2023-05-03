import { Box, CssBaseline, AppBar, Toolbar, Typography, Button, Drawer } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import logomobile from '../../assets/img/logomobile.png';

const navItems = ['Serviços', 'Agendamento', 'Contato'];

function Navbar() {
  return (
    <Box height='16vh' sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 0.3, display: { xs: 'none', sm: 'block' } }}
          >
            <img className="w-80" src={logomobile} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <div className='gap-10 flex'>
              {navItems.map((item) => (
                <Button
                  size="large" key={item} sx={{ color: '#F2DAC2' }}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {item}
                  </Typography>
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
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