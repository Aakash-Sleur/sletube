import {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import {Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => 
      setVideos(data.items))
  }, [searchTerm])


  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h6' fontWeight={'bold'} md={2} sx={{
          color:'#ece7dc', 
          marginY: "1rem",
          marginLeft: "1rem"
        }}>
        Search Results for: <span style={{ color: '#ece7dc', fontSize:'0.8em'}}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed