import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Video from './Video';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Loader from './Loader';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setVideoDetail(data.items[0]);
        }
      });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items);
        }
      });
  }, [id]);

  if (!videoDetail) {
    return <Loader />;
  }

  const {
    snippet: { title, channelId, channelTitle } = {},
    statistics: { viewCount, likeCount } = {}
  } = videoDetail || {};

  return (
    <Box minHeight="95vh" sx={{ background: '#ccc' }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: { xs: '100%', md: '100%', lg: '95%' }, position: "sticky", top: "73px", left: { xs: 'auto', lg: '50px' }, }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='70vh' controls />
            <Typography color="#000" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#000" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant='h6' sx={{ sm: "subtitle1", md: 'h6' }} color="#000" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {viewCount ? parseInt(viewCount).toLocaleString() : 'N/A'} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {likeCount ? parseInt(likeCount).toLocaleString() : 'N/A'} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
