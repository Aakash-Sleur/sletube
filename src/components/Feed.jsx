import {useState, useEffect} from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = ({open, toogleOpen}) => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => 
      setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx:'column', md:'row'}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, px:{sx:0, md:2}}}>

        <Sidebar 
        open = {open}
        toogleOpen={toogleOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2, marginTop:"1rem"}}>
        
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed