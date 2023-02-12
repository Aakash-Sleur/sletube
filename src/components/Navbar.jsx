import {React}from 'react'
import { Box, Stack, Typography, IconButton, Tooltip, Fade } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Navbar({toogleOpen}) {

  return (
    <Stack direction={{sm:"column", md:"row"}} alignItems={"center"} justifyContent={{md:"space-between"}} p={2} sx={{position: 'sticky', background: '#000', top:0}}>
      <Box display={"flex"} marginRight={{xs:"auto", md:"0"}} alignItems={"center"}>
      <Tooltip title="Open" arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          >
          <IconButton onClick={toogleOpen}>
            <MenuRoundedIcon fontSize='large' sx={{ color: "white"}} />
          </IconButton>
      </Tooltip>
          <Tooltip title="Sle-Tube Home" arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          >
            <Link to={"/"} style={{ display: 'flex', alignItems:'center'}}>
              <Typography variant='h5' color={"white"}>
                SleTube
              </Typography>
          </Link>
          </Tooltip>
      </Box>
      <Box flexShrink={1} marginX={"auto"} >
        <SearchBar />
      </Box>
    </Stack>
  )
}

export default Navbar