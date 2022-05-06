import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    toolbarLink: {
        padding: theme.spacing(1),
        // flexShrink: 0,
        cursor: "pointer",
        color: "white",
        fontSize: 15,
      },
      toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        padding: "30px 30%",
        backgroundColor: "#0f0e0e",
      },
  }));

  const sections = [
    { title: 'Yu-Gi-Oh!', url: '#', to: '' },
    { title: 'Pokemon', url: '#' },
    { title: 'Magic', url: '#' },
    { title: 'Board Games', url: '#' },
    { title: 'Accessories', url: '/accessories'},
    { title: 'Pre-Order', url: '#' },
    { title: 'Contact' }
  ];


export const Footer = (props) => {
    const classes = useStyles();
    return (
        <>
            <div className="acc-footer">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30, display:"flex", flexDirection: "column", alignItems:"center"}}>
                            <div className="footer-logo">
                                <img src="/imgs/Happy-Astronauts-Text-Logo.png"/>
                            </div>
                            <div className="footer-social-icon">
                                <a href="#" className="facebook-field"><i class="fab fa-facebook-f"></i></a >
                                <a href="#" className="youtub-field"><i class="fab fa-youtube"></i></a >
                                <a href="#" className="tiktok-field"><img src="/imgs/tiktok-64.ico"/></a >
                                <a href="#" className="instergram-field"><i class="fab fa-instagram"></i></a >
                                <a href="#" className="discord-field"><i class="fab fa-discord"></i></a >
                            </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30, display:"flex", flexDirection: "column", alignItems:"center"}}>
                        <Link  
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Sign in
                        </Link>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Sign up
                        </Link>
                        <Link 
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Promo Code
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30, display:"flex", flexDirection: "column", alignItems:"center"}}>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Cart
                        </Link>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Report issues
                        </Link>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Contact Us
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30, display:"flex", flexDirection: "column", alignItems:"center"}}>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            style={{textDecoration: "none"}}
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Store Policies
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Link
                        style={{textDecoration: "none"}}
                        color="white"
                        noWrap
                        variant="body2"
                        className={classes.toolbarLink}
                    >
                        Yu-Gi-Oh! Singles
                    </Link>
                    <Link
                        style={{textDecoration: "none"}}
                        color="white"
                        noWrap
                        variant="body2"
                        className={classes.toolbarLink}
                    >
                        Pre-Order
                    </Link>
                    <Link
                        style={{textDecoration: "none"}}
                        color="white"
                        noWrap
                        variant="body2"
                        className={classes.toolbarLink}
                    >
                        Contact
                    </Link>
            </Toolbar>
        </>
    );
  };
  