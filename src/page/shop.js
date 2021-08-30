import React, { useRef } from "react";
import Navbar from "../component/NavBar";
import "../css/shop.css";
import { TreeView, TreeItem } from "@material-ui/lab/";
import { ChevronLeft, ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, Container, Checkbox, Link, Slider, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Card from "../component/Card";

import Footer from "../component/Footer";
export default function Shop() {
  // const [valueRange, setvalueRange] = useState([20, 37]);
  const SizeArr = ["XL", "XXL", "S", "M", "S", "10", "9", "8", "7", "6", "5", "4", "3"];
  const colorArray = ["red", "green", "blue", "yellow", "pink", "grey", "orange", "#9400D3", "#00CED1"];
  const refFirstSlider = useRef(null);
  const refSecondSlider = useRef(null);

  const [checked, setChecked] = React.useState([0]);

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
    nodeFirst.innerHTML = seprator(value[0]);
    nodeSecond.innerHTML = seprator(value[1]);
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
  function treeviewData(props) {
    const labelId = `checkbox-list-treeview-${props}`;

    return (
      <ListItem key={props} role={undefined} dense button onClick={handleToggle(props)} style={{ direction: "ltr" }}>
        <ListItemIcon>
          <Checkbox edge="start" checked={checked.indexOf(props) !== -1} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`برند چرم مشهد${props + 1}`} />
      </ListItem>
    );
  }
  const colorRepeat = colorArray.map((color) => {
    return (
      <Link color="inherit" underline="none" href="#" style={{ width: 50, height: 50, float: "right" }}>
        <div style={{ backgroundColor: color, width: 20, height: 20, borderRadius: "50%", margin: "auto" }}></div>
      </Link>
    );
  });
  const sizeRepeat = SizeArr.map((size, index) => {
    return (
      <Link id={index} href="#" style={{ textDecoration: "none", color: "#797878", float: "right", margin: 10 }}>
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
    <React.Fragment>
      <Navbar navbarLine={true} />
      <Container maxWidth="xl" style={{ paddingTop: 70 }}>
        <Grid container spacing={5}>
          <Grid item lg={3} style={{ borderLeft: "1px solid #916DD5" }}>
            <Typography variant="body1" component="div" style={{ marginTop: 5, float: "right" }}>
              فیلتر های اعمال شده:
            </Typography>
            <Button style={{ fontSize: 16, color: "#916DD5", float: "left" }}>حذف فیلتر ها</Button>
            {/* <div style={{ width: "100%", height: 100, backgroundColor: "red", clear: "both" }}></div> filter case */}
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", marginTop: 45, clear: "both" }}></div>
            <Typography variant="h6" style={{ marginTop: 10 }}>
              دسته بندی ها
            </Typography>
            <TreeView defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronLeft />}>
              <TreeItem nodeId="1" label="مردانه">
                <TreeItem onLabelClick={(event) => clickCheckbox(event)} nodeId="2" label={treeviewData(0)}></TreeItem>
                <TreeItem nodeId="3" label={treeviewData(1)}></TreeItem>
                <TreeItem nodeId="4" label={treeviewData(2)}></TreeItem>
                <TreeItem nodeId="5" label={treeviewData(3)}></TreeItem>
              </TreeItem>
            </TreeView>
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", marginTop: 10 }}></div>
            <TreeView defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronLeft />} style={{ marginTop: 10 }}>
              <TreeItem nodeId="1" label="زنانه">
                <TreeItem onLabelClick={(event) => clickCheckbox(event)} nodeId="2" label={treeviewData(4)}></TreeItem>
                <TreeItem nodeId="3" label={treeviewData(5)}></TreeItem>
                <TreeItem nodeId="4" label={treeviewData(6)}></TreeItem>
                <TreeItem nodeId="5" label={treeviewData(7)}></TreeItem>
              </TreeItem>
            </TreeView>
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", marginTop: 10 }}></div>
            <Typography variant="h6" style={{ marginTop: 10 }}>
              برند ها
            </Typography>
            <List>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} style={{ direction: "ltr" }}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`برند چرم مشهد${value + 1}`} />
                  </ListItem>
                );
              })}
            </List>
            {/* <div style={{ width: "100%", height: 40, lineHeight: "40px", fontSize: 16 }}>
                <span style={{ float: "right" }}>برند چرم مشهد</span>
                <Checkbox color="primary" size="small" inputProps={{ "aria-label": "checkbox with small size" }} style={{ float: "left" }} />
              </div>
              <div style={{ width: "100%", height: 40, lineHeight: "40px", fontSize: 16 }}>
                <span style={{ float: "right" }}>برند جین وست</span>
                <Checkbox color="primary" size="small" inputProps={{ "aria-label": "checkbox with small size" }} style={{ float: "left" }} />
              </div>
              <div style={{ width: "100%", height: 40, lineHeight: "40px", fontSize: 16 }}>
                <span style={{ float: "right" }}>برند جوتی جینز</span>
                <Checkbox color="primary" size="small" inputProps={{ "aria-label": "checkbox with small size" }} style={{ float: "left" }} />
              </div>
              <div style={{ width: "100%", height: 40, lineHeight: "40px", fontSize: 16 }}>
                <span style={{ float: "right" }}>برند آرتا </span>
                <Checkbox color="primary" size="small" inputProps={{ "aria-label": "checkbox with small size" }} style={{ float: "left" }} />
              </div> */}
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", marginTop: 10 }}></div>
            <Typography variant="h6">سایز ها</Typography>
            {sizeRepeat}
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", clear: "right" }}></div>
            <Typography variant="h6">رنگ ها</Typography>
            {colorRepeat}
            <div style={{ width: "100%", height: 1, backgroundColor: "#916DD5", marginTop: 10, clear: "right" }}></div>
            <Typography variant="h6">قیمت بر اساس تومان</Typography>
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              defaultValue={[0, 50000000]}
              onChange={(event, value) => gettextValueSlider(event, value)}
              max={50000000}
            />
            <div style={{ width: "50%", float: "right" }}>
              <h5 style={{ float: "right" }}>از</h5>
              <div ref={refFirstSlider} className="dv_slider_price">
                0
              </div>
            </div>
            <div style={{ width: "50%", float: "right" }}>
              <h5 style={{ float: "right" }}>تا</h5>
              <div ref={refSecondSlider} className="dv_slider_price">
                50,000,000
              </div>
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
          <Grid item lg={9}>
            <table style={{ width: "100%", marginTop: 50 }}>
              <tbody>
                <tr>
                  <td>
                    <Card />
                  </td>
                  <td>
                    <Card />
                  </td>
                  <td>
                    <Card />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card />
                  </td>
                  <td>
                    <Card />
                  </td>
                  <td>
                    <Card />
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
