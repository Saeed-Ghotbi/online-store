import React from "react";
import {
  Hidden,
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  useScrollTrigger,
  Slide,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Home, Search, ShoppingCart, Favorite, AccountCircle, ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../sass/appbar.scss";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Appbar(props) {
  if (props.type === "up") {
    return (
      <Hidden mdUp>
        <HideOnScroll>
          <AppBar color="inherit">
            <Toolbar>
              <Typography variant="h1">{props.title}</Typography>
              <IconButton
                aria-label="view"
                style={{ padding: 0 }}
                onClick={() => {
                  window.history.back();
                }}
              >
                <ArrowBack />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Hidden>
    );
  } else {
    return (
      <Hidden mdUp>
        <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
          <BottomNavigation value={props.value} showLabels>
            <BottomNavigationAction component={Link} to="/" label="خانه" icon={<Home />} />
            <BottomNavigationAction component={Link} label="جستجو" to="/shop" icon={<Search />} />
            <BottomNavigationAction label="سبد خرید" icon={<ShoppingCart />} />
            <BottomNavigationAction label="علاقه مندی ها" icon={<Favorite />} />
            <BottomNavigationAction label="پروفایل" icon={<AccountCircle />} />
          </BottomNavigation>
        </AppBar>
      </Hidden>
    );
  }
}
