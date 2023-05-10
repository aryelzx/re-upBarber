import React from 'react'
import { Box, Modal, useTheme, useMediaQuery } from '@mui/material';
import CardServices from "./CardServices";

function ModalCard() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  const rootRef = React.useRef<HTMLDivElement>(null);
  return (
    <div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: smDown ? 'auto' : '80vh',
          width: '90vw',
          overflow: 'hidden',
          position: 'absolute',
          top: smDown ? '0' : '15vh',
          left: '4.5%',
          borderRadius: '10px',
          backgroundColor: smDown ? 'none' : 'rgba(208, 177, 138, 0.3)',
          backdropFilter: 'blur(4px)',
        }}
        ref={rootRef}
      >

        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',

          }}
          container={() => rootRef.current}
        >
          <CardServices />
        </Modal>
      </Box >
    </div >
  )
}

export default ModalCard