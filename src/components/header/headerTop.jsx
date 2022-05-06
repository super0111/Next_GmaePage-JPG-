import React from 'react';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
      margin: theme.spacing(1, 1.5),
      color: "white",
      fontSize: 12
    },
    linkBuy: {
        width: 60,
        fontSize: 12,
        color: "white",
    }
  }));

export default function HeaderTop() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="header-top">
                <nav className="header-buy">
                    <div className="nav-buy-field">
                    <Link variant="button" style={{textDecoration: "none"}} href="#" className={classes.linkBuy}>
                        <img src="/imgs/buy-64.png"/>
                        Buy
                    </Link>
                    </div>
                    <div className="nav-sell-field">
                    <Link variant="button" href="#" style={{textDecoration: "none"}}  className={classes.linkBuy}>
                        <img src="/imgs/sell-64.png"/>
                        Sell
                    </Link>
                    </div>
                </nav>
                <nav>
                    <div className="header-top-switch">
                        <Switch
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <span>Light</span>
                    </div>
                    <div className="social-icon">
                        <Link variant="button" href="#" className={classes.link}>
                            <FacebookIcon className="sign" style={{ fontSize: 25 }}/>
                        </Link>
                        <Link variant="button" href="#" className={classes.link}>
                            <YouTubeIcon className="sign" style={{ fontSize: 25 }}/>
                        </Link>
                        <Link variant="button" href="#" className={classes.link}>
                            <InstagramIcon className="sign" style={{ fontSize: 25 }}/>
                        </Link>
                        <Link variant="button" href="#" className={classes.link}>
                            <TwitterIcon className="sign" style={{ fontSize: 25 }}/>
                        </Link>
                        <div className="divider"/>
                    </div>
                    <Link variant="button" href="#" style={{display:"flex", alignItems:"center", color: "white", fontSize:12, textDecoration:"none"}}> 
                        <AccountCircleIcon className="sign" style={{ marginRight:10,fontSize: 25 }}/> Sign in
                    </Link>
                </nav>
            </div>
        </React.Fragment>
    );
}