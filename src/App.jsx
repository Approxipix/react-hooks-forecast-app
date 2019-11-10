import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import HeaderComponent from "./components/Header/Header";
import { Layout } from 'antd';
import './scss/index.scss';
import 'antd/dist/antd.min.css';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="main">
      <Router>
        <HeaderComponent />
        <Content className="main__content">
          <Routes />
        </Content>
      </Router>
    </Layout>
  );
};

export default App;
