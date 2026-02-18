import { Box, useMediaQuery, useTheme } from "@mui/material";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import NavigationBar from "../Navigation/NavigationBar";

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <TopHeader />
            <MainHeader />
            {!isMobile && <NavigationBar />}
        </Box>
    )
}