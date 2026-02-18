import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import HeaderSearch from "./HeaderSearch"
import HeaderIcons from "./HeaderIcons"
import NavigationDrawer from "../Navigation/NavigationDrawer";

const MainHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#15570a', color: 'white' }} elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {isMobile && <NavigationDrawer />}
          <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>Vyoma</Box>
          {!isMobile && <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <HeaderSearch />
            <HeaderIcons />
          </Box>
          }
          {isMobile && <HeaderIcons />}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <HeaderSearch />
        </Box>)}
    </>
  )
}

export default MainHeader
