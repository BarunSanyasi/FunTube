import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const { Header } = Layout;

const Navbar = ({ toggleCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Header className='headerMenu'>
      <div className='nav-left flex-div'>
        <Button type='text' icon={<MenuOutlined />} onClick={toggleCollapsed} className='menu_icon' />
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" className='logo' />
        </Link>
      </div>
      <div className='nav-middle flex-div'>
        <Paper component='form' onSubmit={onhandleSubmit} className='search-box flex-div'>
          <input type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IconButton type='submit' aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </Header>

  )
}

export default Navbar;