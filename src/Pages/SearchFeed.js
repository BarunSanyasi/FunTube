import React, { useEffect, useState } from 'react';
import { Typography, Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import Video from './Videos/Video';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h6" fontWeight="bold" margin='10px 12px'>
                Search Results for {searchTerm}
            </Typography>
            <Box display='flex' >
                <Box sx={{ mr: { sm: '100px' } }}>
                    {videos && <Video videos={videos} />}
                </Box>
            </Box>
        </Box>

    );
}

export default SearchFeed;
