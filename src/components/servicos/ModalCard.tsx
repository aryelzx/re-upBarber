import React from 'react'
import { Box, Modal } from '@mui/material';
import CardServices from "./CardServices";

function ModalCard() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <Box
        sx={{
          height: 615,
          marginTop: 10,
          flexGrow: 1,
          minWidth: 300,
          transform: 'translateZ(0)',
          '@media all and (-ms-high-contrast: none)': {
            display: 'none',
          },
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
            flexDirection: 'row',
            top: 10,
            p: 1,
            alignItems: 'center',
            justifyContent: 'center',

          }}
          container={() => rootRef.current}
        >
          <CardServices />
        </Modal>
      </Box >
    </div>
  )
}

export default ModalCard