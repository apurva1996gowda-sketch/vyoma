import { Box, Typography } from "@mui/material"

const TopHeader = () => {
  return (
    <Box sx={{py:0.5,textAlign:'center',fontSize:'0.9rem',bgcolor:'#f5f5f5'}}>
      <Typography variant='body2'>Free Shipping on Orders Above ₹999</Typography>
    </Box>
  )
}

export default TopHeader
