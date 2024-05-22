import React from 'react';
import { Layout, Menu } from 'antd';
import { categories } from '../../utils/constants';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setSelectedCategory }) => {
  const handleClick = (e) => {
    const selectedCategory = categories.find(category => category.key === e.key);
    setSelectedCategory(selectedCategory.label);
  };

  return (
    <Sider collapsible trigger={null} collapsed={collapsed}
      style={{ width: 256, position: 'fixed' }}
      theme="light">
      <Menu style={{ height: '100vh' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={categories}
        onClick={handleClick}
      />
    </Sider>
  );
};

export default Sidebar;
