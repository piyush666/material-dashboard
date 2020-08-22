import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} spacing={4}>
                        <Tabs
                            value={1}
                            indicatorColor="primary"
                            textColor="inherit"
                        >
                            <Tab component={Link} to="/" label="home" color='inherit' />
                            <Tab component={Link} to="/aboutus" label="aboutUs" />
                            <Tab component={Link} to="/contact" label="contact" />
                        </Tabs>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;