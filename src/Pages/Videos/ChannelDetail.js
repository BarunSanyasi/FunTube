import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Video from './Video';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideo(data?.items));
  }, [id]);

  return (
    <Box>
      <Box>
        <div style={{ background: '#ccc', zIndex: 10, height: '200px' }} />
        <ChannelCard channelDetail={ChannelDetail} marginTop='-120px' />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '0' } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail