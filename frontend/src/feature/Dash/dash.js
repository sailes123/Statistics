import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import GraphGroup from '../GraphGroup/graphGroup';
import Student from '../Student/student';
import ZoomBlueGraph from '../ZoomBlueGraph/zoomBlueGraph';
const { Header, Content, Sider } = Layout;

const Dash = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header"  style={{position:"fixed",width:"100%",zIndex:"20"}}>
        <div className="logo"/>
      </Header>
 <Sider
          width={200}
          theme="dark"
      breakpoint="lg"
          style={{
            background:" #001529",
            height: "100vh",
            overflow: "auto",
            position:"fixed",
            marginTop:"64px"
          }}
        >
          <div style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="">Services</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="student">Students</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/group">Group</Link>
          </Menu.Item>
        </Menu>
        </Sider>
      <Layout>
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
          className="content"
        >        
        <Outlet/>
          </Content>
      </Layout>
    </Layout>
  );
};
export default Dash;