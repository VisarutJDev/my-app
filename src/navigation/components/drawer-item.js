import React from "react";

import { withStyles, Divider } from "@material-ui/core";
import "@fortawesome/fontawesome-free-solid";

import DrawerMenu from "./drawer-menu";
import { PathConfig } from "config";
// import Logo from 'image/badminton-logo.png';

const DrawerItems = ({
  onClick,
  is_md_up,
  classes
}) => (
  <div className={classes.root}>
    <div className={classes.drawer_header}>
        {/* <img src={Logo} alt="" className={classes.image_size}/> */}
    </div>
    <Divider/>
    <DrawerMenu
      text="HOME"
      onClick={onClick}
      is_md_up={is_md_up}
      // icon={"clipboard-list"}
      path={PathConfig.root+ "#header"}
    />
    <DrawerMenu
      text="ABOUT"
      onClick={onClick}
      is_md_up={is_md_up}
      // icon={"clipboard-list"}
      path={PathConfig.root+ "#about"}
    />
    <DrawerMenu
      text="MY ABILITY"
      onClick={onClick}
      is_md_up={is_md_up}
      // icon={"clipboard-list"}
      path={PathConfig.root+ "#ability"}
    />
    <DrawerMenu
      text="LATEST BLOG"
      onClick={onClick}
      is_md_up={is_md_up}
      // icon={"clipboard-list"}
      path={PathConfig.root+ "#ability"}
    />
    <DrawerMenu
      text="CONTACT"
      onClick={onClick}
      is_md_up={is_md_up}
      // icon={"clipboard-list"}
      path={PathConfig.root+ "#header"}
    />
  </div>
);

const styles_component = theme => ({
  root: {
    height: "100vh",
    background: "transparent",
    overflowY: "auto"
  },
  drawer_header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.whitesmoke,
    padding: "18px 8px 20px 8px"
  },
  image_size: {
    width: "260px"
  }
});

export default withStyles(styles_component)(DrawerItems);
