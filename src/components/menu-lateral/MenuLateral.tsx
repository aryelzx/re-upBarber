import * as React from 'react';
import { SwipeableDrawer, Button, Box, useTheme, useMediaQuery, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'right';

export default function SwipeableTemporaryDrawer() {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'right' || anchor === 'right' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* add rotas aqui */}
        {['Serviços', 'Agentamento', 'Contato', 'Portfólio'].map((text) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                {/* add icones aqui */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {smDown && (
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </Button>
          )}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}