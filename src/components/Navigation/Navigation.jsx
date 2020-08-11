import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

import { Button } from 'antd';

const Navigation = () => (
  <nav className='Navigation'>
    <NavLink to='/'>
      <Button type='primary' shape='circle' icon='home' size='large' className='Navigation__button'/>
    </NavLink>
    <NavLink to='/settings'>
      <Button type='primary' shape='circle' icon='setting' size='large' className='Navigation__button'/>
    </NavLink>
  </nav>
);

export default Navigation;
