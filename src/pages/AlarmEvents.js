import React from 'react'
import Box from '@mui/material/Box';

const AlarmEvents = () => {
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
            <div>Alarm Events</div>
        </Box>
  )
}

export default AlarmEvents;