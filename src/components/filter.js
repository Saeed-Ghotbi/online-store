import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ExpandMore,
  FilterList,
  Sort,
  ViewStream,
  ViewComfy,
  Close,
  KeyboardArrowDownOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "../sass/filter.scss";
export default function Filter(props) {
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));

  const SizeArr = ["XL", "XXL", "S", "M", "S", "10", "9", "8", "7", "6", "5", "4", "3"];
  const colorArray = ["red", "green", "blue", "yellow", "pink", "grey", "orange", "#9400D3", "#00CED1"];
  const refFirstSlider = useRef(null);
  const refSecondSlider = useRef(null);

  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);

  const [availableProduct, setAvailableProduct] = useState(1);
  const availableProductHandleToggle = () => {
    if (availableProduct === 1) setAvailableProduct(0);
    else setAvailableProduct(1);
  };

  const categoryHandleToggle = (value) => () => {
    const currentIndex = categoryChecked.indexOf(value);
    const newChecked = [...categoryChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCategoryChecked(newChecked);
  };

  const brandHandleToggle = (value) => () => {
    const currentIndex = brandChecked.indexOf(value);
    const newChecked = [...brandChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setBrandChecked(newChecked);
  };

  function gettextValueSlider(event, value) {
    const nodeFirst = refFirstSlider.current;
    const nodeSecond = refSecondSlider.current;
    nodeFirst.value = seprator(value[0]);
    nodeSecond.value = seprator(value[1]);
  }

  function seprator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function clickCheckbox(event) {
    console.log("click");
  }
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }
  function treeviewData(props, index) {
    const labelId = `checkbox-list-treeview-${index}`;

    return (
      <ListItem key={index} role={undefined} dense button onClick={categoryHandleToggle(index)} style={{ direction: "ltr" }}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={categoryChecked.indexOf(index) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={props} />
      </ListItem>
    );
  }
  const colorRepeat = colorArray.map((color, index) => {
    return (
      <Link color="inherit" key={index} underline="none" href="#" style={{ width: 50, height: 50, float: "right" }}>
        <div style={{ backgroundColor: color }} className="dv_color_product"></div>
      </Link>
    );
  });
  const sizeRepeat = SizeArr.map((size, index) => {
    return (
      <Link id={index} key={index} href="#" className="link_dv_size">
        <div className="size_dv_style">{size}</div>
      </Link>
    );
  });
  const AirbnbSlider = withStyles({
    root: {
      color: "#916DD5",
      height: 3,
      left: "10%",
      width: "80%",
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      marginTop: -12,
      marginLeft: -13,
      boxShadow: "#ebebeb 0 2px 2px",
      "&:focus, &:hover, &$active": {
        boxShadow: "#ccc 0 2px 3px 1px",
      },
      "& .bar": {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: "#d8d8d8",
      opacity: 1,
      height: 3,
    },
  })(Slider);

  return (
    <>
      <Grid container item justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5" className="title_filter">
            ???????? ???????? ????????????
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="close">
            <Close />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6" style={{ marginRight: device ? 0 : 10 }}>
          ?????????? ?????? ?????????? ??????:
        </Typography>
        <Button style={{ fontSize: 16, color: "#916DD5", float: "left" }}>?????? ?????????? ????</Button>
      </Grid>
      <Grid item>
        <div className="line"></div>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="title_filter">
          ???????? ???????? ????
        </Typography>
        <TreeView defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronLeft />}>
          <TreeItem nodeId="1" label="????????????">
            <TreeItem onLabelClick={(event) => clickCheckbox(event)} nodeId="2" label={treeviewData("????", 0)}></TreeItem>
            <TreeItem nodeId="3" label={treeviewData("????????????", 1)}></TreeItem>
            <TreeItem nodeId="4" label={treeviewData("??????????", 2)}></TreeItem>
            <TreeItem nodeId="5" label={treeviewData("??????????", 3)}></TreeItem>
          </TreeItem>
        </TreeView>
      </Grid>
      <Grid item>
        <div className="line"></div>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="title_filter">
          ???????? ????
        </Typography>
        <List>
          {["???? ????", "?????? ??????", "??????????", "????????"].map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem key={index} role={undefined} dense button onClick={brandHandleToggle(index)} style={{ direction: "ltr" }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={brandChecked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`???????? ${value}`} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item>
        <div className="line"></div>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="title_filter">
          ???????? ????
        </Typography>
        {sizeRepeat}
      </Grid>
      <Grid item>
        <div className="line"></div>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="title_filter">
          ?????? ????
        </Typography>
        {colorRepeat}
      </Grid>
      <Grid item>
        <div className="line"></div>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="title_filter">
          ???????? ???? ???????? ??????????
        </Typography>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          defaultValue={[0, 50000000]}
          onChange={(event, value) => gettextValueSlider(event, value)}
          max={50000000}
          step={500000}
        />

        <div className="dv_slider_price">
          <Typography variant="h5" className="title_range_price">
            ????
          </Typography>
          <input ref={refSecondSlider} type="text" defaultValue="50,000,000" className="input_slider_price" />
        </div>
        <div className="dv_slider_price">
          <Typography variant="h5" className="title_range_price">
            ????
          </Typography>
          <input ref={refFirstSlider} type="text" defaultValue="0" className="input_slider_price" />
        </div>
      </Grid>
      <Grid item align="center">
        <Button variant="contained" className="btn_set_filter">
          ?????????? ??????????????
        </Button>
      </Grid>
    </>
  );
}
