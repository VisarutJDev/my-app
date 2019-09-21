import React, { Component } from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    Avatar,
    Typography,
    Hidden,
    Drawer,
    Divider,
    IconButton,
    Button,
    Menu,
    MenuItem,
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Clear from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";
import { isMdScreen } from "utils/dimension";
import { withRouter } from "react-router-dom";
import navLogo from 'image/badminton-logo.png';
import withRoot from "withRoot";
import { DrawerItems } from "./components"
import { Constance } from "config"
import auth from 'auth'

const DRAWER_WIDTH = 280;

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer_open: isMdScreen(window.innerWidth),
            setAnchorEl: false,
            anchorEl: false,
            open: false,
        }
    }

    onDrawerToggle = () => {
        this.setState({ drawer_open: !this.state.drawer_open });
    };

    onDrawerMenuClick = (path, is_md_up) => {
        if (!is_md_up) {
            this.setState({ drawer_open: false });
        }
        // this.props.history.push(path);
    };

    handleMenu = (event) => {
        this.state.setAnchorEl(event.currentTarget);
    }

    handleClose = () => {
        this.state.setAnchorEl(null);
    }

    render() {
        const { drawer_open } = this.state
        const { children, classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.app_bar}>
                    <Toolbar>
                        <div className={classes.hamburger_box}>
                            <MenuIcon classes={{ root: classes.hamburger_button }} onClick={this.onDrawerToggle} />
                        </div>
                        <Avatar
                            src={navLogo}
                            className={classes.nav_logo}
                        />
                        <Typography
                            variant="title"
                            color="inherit"
                            noWrap
                            className={classes.nav_header}
                        >
                            {Constance.PROJECT_NAME}
                        </Typography>
                        {!auth.isAuthenticated() && <Button color="inherit" onClick={() => {
                            auth.login(() => {
                                this.props.history.push("/app")
                            })
                        }}>Login</Button>}
                        {auth.isAuthenticated() && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={"left"}
                        open={drawer_open}
                        onClose={this.onDrawerToggle}
                        classes={{
                            paper: classes.drawer_paper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <div className={classes.toolbar_button}>
                            <IconButton onClick={this.onDrawerToggle}>
                                <Clear />
                            </IconButton>
                        </div>
                        <DrawerItems
                            onClick={this.onDrawerMenuClick}
                            is_md_up={true}
                        />
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="persistent"
                        open={drawer_open}
                        anchor={"left"}
                        onClose={this.onDrawerToggle}
                        classes={{
                            paper: classes.drawer_paper
                        }}
                        SlideProps={{ unmountOnExit: true }}
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        <DrawerItems
                            onClick={this.onDrawerMenuClick}
                            is_md_up={true}
                        />
                    </Drawer>
                </Hidden>
                <main className={(drawer_open ? classes.content2 : classes.content, classes.content_left, {
                    [classes.content_shift]: drawer_open,
                    [classes.content_shift_left]: drawer_open
                })}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }

}

const styles_component = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        display: "flex",
        width: "100%"
    },
    nav_logo: {
        margin: "0 8px 0 24px",
    },
    app_bar: {
        position: "fixed",
        backgroundColor: theme.palette.white,
        color: theme.palette.jet_black,
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        }
    },
    nav_header: {
        flex: 1,
        fontWeight: "800",
        fontSize: "36px",
        marginTop: "-4px"
    },
    hamburger_box: {
        boxSizing: "content-box",
        border: "1px solid " + theme.palette.gainsboro,
        borderRadius: "6px",
        '&:active': {
            backgroundColor: theme.palette.jet_black,
        },
    },
    hamburger_button: {
        padding: "0px 4px 0px 4px",
        display: "flex",
        color: theme.palette.jet_black,
        '&:active': {
            color: theme.palette.white,
        },
    },
    content: {
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
    },
    content2: {
        paddingLeft: DRAWER_WIDTH,
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
    },
    content_left: {
        [theme.breakpoints.up("md")]: {
            marginLeft: 0
        }
    },
    content_shift: {
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    },
    content_shift_left: {
        [theme.breakpoints.up("md")]: {
            marginLeft: 0
        }
    },
    drawer_paper: {
        // position: "relative",
        // overflow: "hidden",
        backgroundColor: theme.palette.white_smoke,
        width: DRAWER_WIDTH
    },
    toolbar: {
        backgroundColor: theme.palette.white,
        ...theme.mixins.toolbar
    },
    toolbar_button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        backgroundColor: theme.palette.white,
        ...theme.mixins.toolbar
    },
});
export default withRoot(withRouter(withStyles(styles_component)(Navigation)));