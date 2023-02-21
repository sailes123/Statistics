import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import GraphGroup from '../GraphGroup/graphGroup';
import Student from '../Student/student';
const { Header, Content, Sider } = Layout;

const menuName = ["OverAll","Student-wise","Overall Chart"];
const routing = ['/',"student","group"]

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const Dash = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header"  style={{position:"fixed",width:"100%",zIndex:"10"}}>
        <div className="logo"/>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
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
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, UserOutlined,UserOutlined].map(
            (icon, index,route) => (
              {
              key: String(index + 1),
              icon: React.createElement(UserOutlined),
              label: menuName[index],
              onClick: () => {
                window.location.href = routing[index];
              }, 
            }),
          )}
        />
        </Sider>
      <Layout>
       
        <Layout
        >
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
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/student" element={<Student/>} />
              <Route path="/group" element={<GraphGroup/>} />
              
          </Routes>
          
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Dash;