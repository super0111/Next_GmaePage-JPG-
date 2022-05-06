import NavmenuDraw from './navmenudraw';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));
  
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
  ];

export default function HeaderTool() {
    const classes = useStyles();
    // const { sections, title } = props;

    return (
      <>
        <div className="header-tool">
            <div className="nav-logo"><img src="/imgs/Happy-Astronauts-Text-Logo.png"/></div>
            <div className="nav-search">
                <div className="search-bar">
                    <input type="text" placeholder="Search..."/>
                    <div className="search-icon">
                        <SearchIcon style={{ fontSize: 23, color:"white" }}/>
                    </div>
                </div>
                <div className="search-filter">
                    <span>Filter</span>
                    <span>Advanced Search</span>
                </div>
            </div>
            <div className="divider"/>
            <div className="nav-cart">
                <ShoppingCartIcon style={{ color: "#fff", fontSize: 24,transition: "color .3s linear", paddingRright: 10, }}/>
                <span>Cart</span>
            </div>
        </div>
        <div className="header-tool-responsive">
          <div className="tool">
            <NavmenuDraw/>
            <img src="/imgs/Happy-Astronauts-Text-Logo.png"/>
            <div className="cart-btn"><ShoppingCartIcon style={{ color: "#fff", fontSize: 24,transition: "color .3s linear", paddingRright: 10, }}/></div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search Cards"/>
            <div className="search-btn"> <SearchIcon style={{ fontSize: 23, color:"white" }}/></div>
          </div>
        </div>

      </>
    );
}