import React, {useState, useEffect} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;

function Admin(props) {
    const [collapsed, setCollapsed] = useState(false);
    
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                nav 1
                </Menu.Item>
                <Menu.Item key="2" >
                nav 2
                </Menu.Item>
                <Menu.Item key="3" >
                nav 3
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                Content
            </Content>
            </Layout>
        </Layout>
    )
}



export default Admin;