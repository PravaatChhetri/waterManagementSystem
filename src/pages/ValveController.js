import React from 'react';
import Box from '@mui/material/Box';


const ValveController = () => {
  return (
    <Box
          component="main"
          sx={{
            mt:{lg:16,md:16,sm:16,xs:16},
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${240}px)` },
            ml:{sm:`${260}px`}

          }}
        >
            <div>Valve Controller</div>
        </Box>
  )
}

export default ValveController;