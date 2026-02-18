import { Box, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "./navigationlist";
// import NavigationDrawer from "./NavigationDrawer";

const NavigationBar = () => {
  const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   if (isMobile) {
//     return <NavigationDrawer />;
//   }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        py: 1,
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        bgcolor: "#fff",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.id}
          onClick={() => navigate(item.path)}
          sx={{
            color: "#333",
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              color: "primary.main",
              backgroundColor: "transparent",
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default NavigationBar;
