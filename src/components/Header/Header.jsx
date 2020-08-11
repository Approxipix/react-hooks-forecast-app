import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const { Header } = Layout;

const HeaderComponent = () => (
  <Header className='Header'>
    <Row type='flex' justify='space-between' align='middle'>
      <Col>
        <Row type='flex' justify='space-between' align='middle'>
          <Icon type='cloud' className='Header__icon' />
          <h2 className='Header__title'>
            Weather Forecast
          </h2>
        </Row>
      </Col>
      <Col>
        <Navigation />
      </Col>
    </Row>
  </Header>
);

export default HeaderComponent;
