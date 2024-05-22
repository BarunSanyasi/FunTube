import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Layout, Typography } from 'antd';
import Video from '../Videos/Video';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Sidebar from '../../Components/Sidebar/Sidebar';

const { Content } = Layout;
const { Title } = Typography;

const Home = ({collapsed}) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Layout>
      <Sidebar collapsed={collapsed}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Layout className='contantLayout'>
        <Content className='content-box'>
          <Title level={4} style={{fontWeight:'bold'}}>{selectedCategory}</Title>
          <Video videos={videos} />
        </Content>
      </Layout>
    </Layout>
      
  );
}

export default Home;
