import { Box } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Feed, VideoDetails, SearchFeed, Navbar, ChannelDetail}  from './components'

function App() {
  const [open, setOpen] = useState(false)

  const toogleOpen = () => {
    (open === true) ? setOpen(false) : setOpen(true)
  }
  return (
    <Box sx={{ backgroundColor: "#000"}}>
      <Navbar 
      toogleOpen={toogleOpen}/>
      <Routes>
        <Route path='/' exact element={<Feed
        open = {open}
        toogleOpen = {toogleOpen}
        
        />} />
        <Route path='/video/:id' element={<VideoDetails/>} />
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
      </Routes>
    </Box>
  )
}

export default App
