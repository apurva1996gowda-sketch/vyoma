import { Badge, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderIcons = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    {isMobile ? (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton sx={{ color: 'white' }}><WhatsAppIcon /></IconButton>
        <Badge badgeContent={4} sx={{ "& .MuiBadge-badge": { backgroundColor: '#f6740a', color: 'white' ,top:8,right:8} }}>
          <IconButton sx={{ color: 'white' }}><ShoppingCartIcon /></IconButton>
        </Badge>
      </Box>
    ) : (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button startIcon={<WhatsAppIcon />} sx={{ color: 'white' }}>number</Button>
        <Button sx={{ color: 'white', textTransform: 'capitalize', fontSize: '16px' }}>Sign In</Button>
        <Badge badgeContent={4} sx={{ "& .MuiBadge-badge": { backgroundColor: '#f6740a', color: 'white' } }}>
          <Button variant='outlined' startIcon={<ShoppingCartIcon />} sx={{ color: 'white', textTransform: 'capitalize' }}>my cart</Button>
        </Badge>
      </Box>
    )}
    </>
  )
}

export default HeaderIcons
