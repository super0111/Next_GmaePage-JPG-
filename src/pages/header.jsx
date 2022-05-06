import React from 'react';
import HeaderTop from '../components/header/headerTop';
import HeaderTool from '../components/header/headerTool';
import Navigator from '../components/header/navigator';


export const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderTop />
      <HeaderTool />
      <Navigator />
    </React.Fragment>
  )
}
