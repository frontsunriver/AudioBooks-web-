import React from 'react';
import { Link } from 'bisheng/router';
import { useHistory } from 'react-router-dom'
import { Col, Row, Button, Menu } from 'antd';

export default function Header(props) {
  const history = useHistory();
  const goToAdmin = () => {
    history.push('/admin');
  }
  return (
    <div>
      <header {...props} id="header">
        <Row justify="space-between" >
          <Col span={8}>
            <Link id="logo">
              <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
              <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
            </Link>
          </Col>
          <Col span={8} offset={8}>
            <Menu mode="horizontal">
              <Menu.Item key="mail">
                Language
              </Menu.Item>
              <Menu.Item onClick={goToAdmin}>
                Admin
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        
        
        
      </header>
      
    </div>
    

  );
}
