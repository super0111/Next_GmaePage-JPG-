import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary1: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      padding: "0 5%",
      backgroundColor: "#1a1a1a",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: "#767474",
      fontSize: 15,
    },
    filterBtn: {
        color: "white",
        fontSize: 14,
        backgroundColor: "#ffb400"
    },

    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "black",
        alignItems: "center",
        padding:10,
      },
      cardMedia: {
        paddingTop: '100%', // 16:9
        width: "100%",
      },
      cardContent: {
        color:"white",
        flexGrow: 1,
      },
  }));


export const Accessories = (props) => {
    const classes = useStyles();
    return (
        <>
            <div className="filter-field">
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Brand
                        </Link>
                        <div className="divider"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Product Type
                        </Link>
                        <div className="divider"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            In Stock
                        </Link>
                        <div className="divider"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            On Sale
                        </Link>
                        <div className="divider"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Price
                        </Link>
                        <div className="divider"/>

                        <Button variant="outlined" color="primary" className={classes.filterBtn}>
                            Filter
                        </Button>
                </Toolbar>
            </div>

            <div className="filter-field-responsive">
                <div className="tool">
                    <div className="advanced-btn">Advanced Search</div>
                    <div className="filter-btn">Filter</div>
                    <div className="cad-btn">
                    <Switch
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    </div>
                </div>
            </div>

            <div className="filter-field-responsive">
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary1}>
                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Brand
                        </Link>
                        <div className="divider-bottom"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Product Type
                        </Link>
                        <div className="divider-bottom"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            In Stock
                        </Link>
                        <div className="divider-bottom"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            On Sale
                        </Link>
                        <div className="divider-bottom"/>

                        <Link
                            color="white"
                            noWrap
                            variant="body2"
                            className={classes.toolbarLink}
                        >
                            Price
                        </Link>
                        <div className="divider-bottom"/>

                </Toolbar>
            </div>

            <div className="acc-body">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{marginTop:30}}>
                        <Card className={classes.card}>
                            <div className="acc-card" style={{}}>
                                <img src="/imgs/ASTRO-COIN-logo.png"/>
                            </div>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    200CT CARDBOARD BOX
                                </Typography>
                                <Typography style={{color: "#04d15a", fontSize: 15, textAlign:"center", marginTop:20}}>
                                    0 in stock at
                                </Typography>
                                <Typography style={{color:"#ffb400", fontSize: 18, textAlign:"center", marginTop:20}}>
                                    $1.00
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                 </Grid>
            </div>
        </>
    );
  };
  