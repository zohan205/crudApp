import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111',
        position: "static"
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})


const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header}  >
            <Toolbar  >
                <NavLink className={classes.tabs} to="./" >Code for Interview</NavLink>
                <NavLink className={classes.tabs} to="all" >All Users</NavLink>
                <NavLink className={classes.tabs} to="add" >Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
