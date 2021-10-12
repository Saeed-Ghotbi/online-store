import React, { useRef } from "react";
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
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Appbar from "../component/Appbar";
import Navbar from "../component/NavBar";
import Card from "../component/Card";
import Footer from "../component/Footer";

import "../sass/shop.scss";
export default function Shop() {
  // const [valueRange, setvalueRange] = useState([20, 37]);
  const SizeArr = ["XL", "XXL", "S", "M", "S", "10", "9", "8", "7", "6", "5", "4", "3"];
  const colorArray = ["red", "green", "blue", "yellow", "pink", "grey", "orange", "#9400D3", "#00CED1"];
  const refFirstSlider = useRef(null);
  const refSecondSlider = useRef(null);

  const [checked, setChecked] = React.useState([0]);

  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
      <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)} style={{ direction: "ltr" }}>
        <ListItemIcon>
          <Checkbox edge="start" checked={checked.indexOf(index) !== -1} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />
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
      padding: "13px 0",
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
      <Navbar navbarLine={true} />
      <Container maxWidth="xl" style={{ paddingTop: device ? 70 : 0 }}>
        <Appbar type="up" title="انواع سویشرت و هودی مردانه" />
        <Grid container spacing={device ? 5 : 0}>
          <Hidden mdDown>
            <Grid container item direction="column" lg={3} spacing={2}>
              <Grid item>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  خرید لباس مردانه
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">فیلتر های اعمال شده:</Typography>
                <Button style={{ fontSize: 16, color: "#916DD5", float: "left" }}>حذف فیلتر ها</Button>
              </Grid>
              <Grid item>
                <div className="line"></div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="title_filter">
                  دسته بندی ها
                </Typography>
                <TreeView defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronLeft />}>
                  <TreeItem nodeId="1" label="مردانه">
                    <TreeItem onLabelClick={(event) => clickCheckbox(event)} nodeId="2" label={treeviewData("کت", 0)}></TreeItem>
                    <TreeItem nodeId="3" label={treeviewData("سویشرت", 1)}></TreeItem>
                    <TreeItem nodeId="4" label={treeviewData("پلیور", 2)}></TreeItem>
                    <TreeItem nodeId="5" label={treeviewData("شلوار", 3)}></TreeItem>
                  </TreeItem>
                </TreeView>
              </Grid>
              <Grid item>
                <div className="line"></div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="title_filter">
                  برند ها
                </Typography>
                <List>
                  {["پی لس", "جین وست", "پیانو", "مادر"].map((value, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                      <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)} style={{ direction: "ltr" }}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(index) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`برند ${value}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item>
                <div className="line"></div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="title_filter">
                  سایز ها
                </Typography>
                {sizeRepeat}
              </Grid>
              <Grid item>
                <div className="line"></div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="title_filter">
                  رنگ ها
                </Typography>
                {colorRepeat}
              </Grid>
              <Grid item>
                <div className="line"></div>
              </Grid>
              <Grid item>
                <Typography variant="h6" className="title_filter">
                  قیمت بر اساس تومان
                </Typography>
                <AirbnbSlider
                  ThumbComponent={AirbnbThumbComponent}
                  defaultValue={[0, 50000000]}
                  onChange={(event, value) => gettextValueSlider(event, value)}
                  max={50000000}
                  step={500000}
                />

                <div style={{ width: "50%", float: "right" }}>
                  <Typography variant="h6" className="title_range_price">
                    تا
                  </Typography>
                  <input ref={refSecondSlider} type="text" defaultValue="50,000,000" className="dv_slider_price" />
                </div>
                <div style={{ width: "50%", float: "right" }}>
                  <Typography variant="h6" className="title_range_price">
                    از
                  </Typography>
                  <input ref={refFirstSlider} type="text" defaultValue="0" className="dv_slider_price" />
                </div>
                <Button
                  variant="contained"
                  style={{
                    width: 130,
                    height: 50,
                    backgroundColor: "#3E206D",
                    borderRadius: 15,
                    color: "white",
                    marginRight: "30%",
                    marginTop: 10,
                  }}
                >
                  اعمال تغییرات
                </Button>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container item xs={10} justifyContent="space-around" alignItems="center">
              <Grid item>
                <Button variant="outlined" startIcon={<FilterList />} className="top_btn_shop">
                  فیلتر کردن
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" startIcon={<Sort />} className="top_btn_shop">
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
      <Footer />
    </>
  );
}
