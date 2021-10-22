import React, { useState, useRef } from "react";
import { ChevronLeft, ExpandMore, FilterList, Sort, ViewStream, ViewComfy } from "@material-ui/icons";
import { TreeView, TreeItem, Pagination } from "@material-ui/lab/";
import { withStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Container,
  Checkbox,
  Link,
  Slider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  IconButton,
  Drawer,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Appbar from "../components/Appbar";
import Filter from "../components/Filter";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../sass/shop.scss";
export default function Shop() {
  const [sortChecked, setSortChecked] = useState();
  const [drawer, setDrawer] = useState({ bottom: false, left: false });

  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));

  const sortHandleToggle = (value) => () => {
    // const currentIndex = sortChecked.indexOf(value);
    // const newChecked = sortChecked;
    if (value == sortChecked) return;
    else {
      setSortChecked(value);
    }
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
  };

  const toggleDrawer = (open, position) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    if (position === "bottom") {
      setDrawer({ bottom: open });
    } else {
      setDrawer({ left: open });
    }
  };

  return (
    <>
      <Navbar navbarLine={true} />
      <Container maxWidth="xl" style={{ paddingTop: device ? 70 : 0 }}>
        <Appbar type="up" title="انواع سویشرت و هودی مردانه" />
        <Grid container spacing={device ? 5 : 0}>
          <Hidden mdDown>
            <Grid container item direction="column" lg={3} spacing={2}>
              <Filter />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container item xs={10} justifyContent="space-around" alignItems="center">
              <Grid item>
                <Button variant="outlined" startIcon={<FilterList />} onClick={toggleDrawer(true, "left")} className="top_btn_shop">
                  فیلتر کردن
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" startIcon={<Sort />} onClick={toggleDrawer(true, "bottom")} className="top_btn_shop">
                  مرتب سازی
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={2} justifyContent="center" alignItems="center">
              <IconButton aria-label="view" className="top_btn_shop">
                <ViewStream />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            container
            item
            direction="row"
            spacing={device ? 3 : 1}
            justifyContent="flex-start"
            alignItems="center"
            lg={9}
            xs={12}
            style={{ marginTop: device ? 20 : 0 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <Grid key={item} xs={6} item lg={4}>
                  <Card />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <div style={{ float: device ? "left" : "none", marginTop: device ? 0 : 10, marginBottom: device ? 10 : 80 }}>
          <Pagination color="primary" count={10} shape="rounded" />
        </div>
        <Appbar type="down" value={1} />
      </Container>
      <Drawer anchor="bottom" open={drawer.bottom} onClose={toggleDrawer(false, "bottom")}>
        <List>
          {["کمترین قیمت", "بیشترین قیمت", "جدیدترین ها", "بیشترین تخفیف", "بیشترین فروش"].map((value, index) => {
            return (
              <ListItem key={index} role={undefined} dense button onClick={sortHandleToggle(index)}>
                <FormControlLabel checked={sortChecked === index} value="end" control={<Radio color="primary" />} label={value} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Drawer anchor="left" open={drawer.left} onClose={toggleDrawer(false, "left")}>
        <Grid container item direction="column" xs={12}>
          <Filter />
        </Grid>
      </Drawer>
      <Footer />
    </>
  );
}
