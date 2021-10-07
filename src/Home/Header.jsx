import React from 'react';
import { Link } from 'bisheng/router';
import { useHistory } from 'react-router-dom'
import { Col, Row, Button, Menu } from 'antd';
import {GlobalOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;
export default function Header(props) {
  const {changeLanguage} = props;
  const history = useHistory();

  const goToAdmin = () => {
    history.push('/admin');
  }
  console.log(props);
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
              <SubMenu key="SubMenu" icon={<GlobalOutlined/>} title="Laguange">
                <Menu.Item key="setting:1" onClick={(event) => {
                  changeLanguage('eng');
                  }}>English</Menu.Item>
                <Menu.Item key="setting:2" onClick={(event) => {
                  changeLanguage('china');
                  }}>Chineses</Menu.Item>
              </SubMenu>
              <Menu.Item onClick={goToAdmin}>
                Login
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        
        
        
      </header>
      
    </div>
    

  );
}
