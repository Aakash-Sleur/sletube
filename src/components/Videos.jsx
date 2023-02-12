import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'
import {Loader} from './'

const Videos = ({videos, direction}) => {
  
  return (
      (!videos?.length) ? (<Loader />) :(
      <Stack direction={direction || 'row'} flexWrap='wrap' marginLeft={"1rem"} justifyContent={'center'} alignItems={'center'} gap={2}>
        {videos.map((item, idx) => (
            <Box key={idx} >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>

        ))}
    </Stack>)
    
  )
}

export default Videos


