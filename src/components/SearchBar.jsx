import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Search } from '@mui/icons-material'
import { height, width } from '@mui/system';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }


  return (
    <Paper
        component={"form"}
        onSubmit={handleSearch}
        sx={{
            borderRadius:20,
            border: '1px solid #292929',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5},
            display: 'flex',
            alignItems: 'center',
            justifyContent:"space-between",
            background:"#121212",
            height:"3rem",
        }}
    >
        <input type="text"
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{background:"#121212", color:"#daccac", fontSize:"1em"}}
         />
         <IconButton type='button' onClick={() => setSearchTerm("")}>
            <CloseIcon sx={{ color: "#daccac", height: "100px"}}/>
         </IconButton>
         <IconButton type='submit' sx={{ p:'10px',
         color:'#daccac'}}>
           <Search />
         </IconButton>
         
    </Paper>
  )
}

export default SearchBar