import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';

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
      padding: "0 45px",
      backgroundColor: "black",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: "white",
      fontSize: 15,
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

export default function Navigator() {
    const classes = useStyles();
    // const { sections, title } = props;

    return (
      <>
        <div className="navigator">
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                <Link
                    style={{textDecoration: "none"}} 
                    color="white"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
                ))}
                  <Switch
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
            </Toolbar>
        </div>
    
      </>
    );
}