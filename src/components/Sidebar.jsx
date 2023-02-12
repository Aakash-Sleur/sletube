import React from 'react'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { Stack, SwipeableDrawer, IconButton, Box, Typography, Tooltip, Fade } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({open, toogleOpen, selectedCategory, setSelectedCategory}) => {

  return (
    <SwipeableDrawer
    onOpen={toogleOpen}
    onClose={toogleOpen}
    open={open}
    sx={{
      overflowY: "auto",
      height: { xs:'auto', md: "95%" },
      flexDirection: {md: 'column'},
  }}
    >
      
      <Stack
      sx={{
          overflowY: "auto",
          height: { xs:'auto', md: "100%" },
          background: "black"
      }}
      >
        <Box display={'flex'} alignItems={"center"} sx={{padding:"0.5rem", paddingRight:"2rem", paddingTop:"1rem"}}>
          <Tooltip title="Close"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          >
            <IconButton sx={{color:'white'}} onClick={toogleOpen}>
            <MenuOpenRoundedIcon fontSize='large'/>
            </IconButton>
          </Tooltip>
          <Typography variant='h5' color={"white"}>
              Sle-Tube
            </Typography>
        </Box>

      {categories.map((category) => (
        <button className='category-btn'
        onClick={()=>setSelectedCategory(category.name)}
        style={{
          background:category.name === selectedCategory && '#272727', 
          color:'white'
          }}
          key={category.name}
        >
          <span style={{color: category.name === selectedCategory? 'white':'#272727', marginRight: '15px'}}>
          {category.icon}
          </span>
          <span
          style={{opacity: category.name === selectedCategory ? '1': '0.8', fontSize:"1.2em"}}
          >{category.name}</span>
        </button>
      ))}
      </Stack>
    </SwipeableDrawer>
  )
}

export default Sidebar