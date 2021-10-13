import React, { useState, useRef } from "react";
import { ChevronLeft, ExpandMore, FilterList, Sort, ViewStream, ViewComfy, Close } from "@material-ui/icons";
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
  AppBar,
  Toolbar,
  Switch,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Appbar from "../component/Appbar";
import Navbar from "../component/NavBar";
import Card from "../component/Card";
import Footer from "../component/Footer";

import "../sass/filter.scss";
export default function Filter(props) {
  const [availableProduct, setAvailableProduct] = useState(1);
  const availableProductHandleToggle = () => {
    if (availableProduct === 1) setAvailableProduct(0);
    else setAvailableProduct(1);
  };
  return (
    <>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Button style={{ color: "rgb(245, 75, 75)", padding: "0px" }}>پاک کردن همه</Button>

          <Typography variant="h1" style={{ marginLeft: "20%" }}>
            فیلتر ها
          </Typography>
          <IconButton
            edge="start"
            aria-label="Close"
            style={{ padding: 0 }}
            onClick={() => {
              window.history.back();
            }}
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container alignItems="center" style={{ marginTop: 60 }}></Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h5">نمایش فقط کالاهای موجود</Typography>
        <Switch checked={availableProduct === 1} onChange={() => availableProductHandleToggle()} />
      </Grid>
      <Grid>
        <div className="line_filter"></div>
      </Grid>
    </>
  );
}
