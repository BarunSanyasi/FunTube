import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoThumbnailUrl
} from '../../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet, statistics } }) => {
  const views = statistics?.viewCount ? parseInt(statistics.viewCount).toLocaleString() : 'No';
  const timeSinceUpload = (date) => {
    const now = new Date();
    const uploadDate = new Date(date);
    const seconds = Math.floor((now - uploadDate) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  const uploadTime = snippet?.publishedAt ? timeSinceUpload(snippet.publishedAt) : 'unknown time';

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "340px", }, boxShadow: "none", borderRadius: 3 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#fff", height: '140px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant="subtitle1" fontWeight="bold" color="#1E1E1E">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        <Typography variant="body2" color="gray">
          {views} views • {uploadTime}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard