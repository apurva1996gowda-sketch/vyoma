import { Box, IconButton, TextField } from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const HeaderSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Box>
    <TextField 
    size="small"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
      sx={{ width: '80%',"& .MuiOutlinedInput-root": {
      borderRadius: '10px 0 0 10px', backgroundColor:'white' },'& .MuiInputBase-root': {
        height: '35px'}
    }}
      />
      <IconButton sx={{bgcolor:'green',borderRadius:'0 10px 10px 0',color:'white',height:'35px'}}>
        <SearchIcon />
      </IconButton>
      </Box>
  )
}

export default HeaderSearch
