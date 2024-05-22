import {
    HomeFilled,
    VideoCameraFilled,
    DiffFilled,
    // PlayCircleFilled,
    // HistoryOutlined,
    // ClockCircleOutlined,
    // LikeOutlined,
    // PlaySquareOutlined,
    RocketFilled,
    FireFilled,
    FolderOpenFilled,
    LaptopOutlined,
    CustomerServiceFilled,
    ContainerFilled,
    SolutionOutlined,
    TrophyFilled
} from '@ant-design/icons';


export const categories = [
    {key: '1', label: 'Home', icon: <HomeFilled/>},
    { key: '2', label: 'Short', icon: <VideoCameraFilled />, },
    { key: '3', label: 'Subscriptions', icon: <DiffFilled />, },
    // {
    //     key: 'sub1', label: 'You',
    //     icon: <PlayCircleFilled />,
    //     children: [
    //         { key: '5', label: 'History', icon: <HistoryOutlined />, },
    //         { key: '6', label: 'Playlist', icon: <PlaySquareOutlined />, },
    //         { key: '7', label: 'Watch Later', icon: <ClockCircleOutlined />, },
    //         { key: '8', label: 'Liked videos', icon: <LikeOutlined />, },
    //     ],
    // },
    {key: '9', label:'Trending', icon: <FireFilled />,},
    { key: '10', label: 'Movies', icon: <FolderOpenFilled />, },
    { key: '11', label: 'Technology', icon: <LaptopOutlined />, },
    { key: '12', label: 'Music', icon: <CustomerServiceFilled />, },
    { key: '13', label: 'Gaming', icon: <RocketFilled />, },
    { key: '14', label: 'Sports', icon: <TrophyFilled />, },
    { key: '15', label: 'Blogs', icon: <SolutionOutlined />, },
    { key: '16', label: 'News', icon: <ContainerFilled />, }
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'