import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import ChannelDetail from './Pages/Videos/ChannelDetail';
import SearchFeed from './Pages/SearchFeed';
import VideoDetail from './Pages/Videos/VideoDetail';

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Navbar toggleCollapsed={toggleCollapsed} />
      <Routes>
        <Route path='/' element={<Home collapsed={collapsed} />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/Channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export default App;
