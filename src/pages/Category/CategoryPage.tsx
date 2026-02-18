import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">
        Showing products for: {categoryName}
      </Typography>
    </Box>
  );
};

export default CategoryPage;
