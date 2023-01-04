import React from 'react'
import Box from '@mui/material/Box';
import FullWidthGrid from '../HomePage';
const HomeGrid = () => {
  return (
    <div>
      
      
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
          {/*Here we display the content*/ }
          
          <FullWidthGrid />
        
        
        </Box>

    </div>
  )
}

export default HomeGrid;