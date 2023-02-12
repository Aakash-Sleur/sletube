import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import { Videos } from './'
import {Loader} from './'
import { Typography, Stack, Box } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromApi'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null)
  const {id} = useParams();
  console.log(videoDetails)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetails(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items));
  }, [id])
  
  if(!videoDetails?.snippet) return <Loader />

  const {snippet: {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetails;

  return (
      <Box minHeight={"95vh"}>
      <Stack direction={{xs:"column", md:"row"}}>
      <Box flex={1}>
        <Box sx={{ width: '100%',position:'sticky', top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color={"#fff"} variant="h5" fontWeight={"bold"} p={2}>
            {title}
          </Typography>
          <Stack direction={"row"} justifyContent="space-between" sx={{ color: "#fff"}} py={1} px={2}>
            <Link to={`channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md:'h6'}}
              color="#fff">
                {channelTitle}
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml:"5px"}}/>
              </Typography>
            </Link>
            <Stack direction={"row"} gap="20px" alignItems={"center"}>
              <Typography variant="body1" sx={{ opacity: 0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7}} display={"flex"} alignItems={"center"}>
                {parseInt(likeCount).toLocaleString()} <ThumbUpOffAltIcon fontSize='medium' sx={{marginLeft:"10px"}}/>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{md:1, xs: 5}} justifyContent="center" alignItems={"center"}>
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails


