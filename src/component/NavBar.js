// import { Height } from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Typography, Container, Grid, List, ListItem, Collapse } from "@material-ui/core";
import { ShoppingCartOutlined, PersonOutlineOutlined, ExpandMoreSharp } from "@material-ui/icons";
import ImgNavbar from "../img/LC-Waikiki.jpg";
import Hidden from "@material-ui/core/Hidden";

import "../sass/navbar.scss";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [status, setStatus] = useState("normal");
  const [checked, setChecked] = useState(false);
  const [options] = useState(["Option 1", "Option 2"]);
  const MouseEnterRef = useRef(null);
  const NavLineRef = useRef(null);

  // useEffect(() => {
  //   const refLine = NavLineRef.current;
  //   refLine.style.display = "";
  //   if (status === "scroll") {
  //     refLine.style.display = "none";
  //   } else {
  //     props.navbarLine === true ? (refLine.style.display = "") : (refLine.style.display = "none");
  //   }
  // }, []);
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 70 && status === "normal") {
      setStatus("scroll");
    } else if (window.scrollY < 70 && status === "scroll") {
      setStatus("normal");
    }
  });
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  function openDetails(type) {
    handleChange();
  }

  function closeDetails(event) {
    //this     is the original element the event handler was assigned to
    var e = event.toElement || event.relatedTarget;
    if (e.parentNode === null) return;
    if (e.parentNode === this || e === this) {
      return;
    }
    handleChange();
  }
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  const StyleNav = {
    width: "100%",
    height: "70px",
    position: "absolute",
    zIndex: 5,
  };
  const StyleNavLine = {
    position: "absolute",
    width: "95%",
    height: "1px",
    bottom: "0px",
    backgroundColor: "#916DD5",
    zIndex: 20,
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  if (status === "scroll") {
    StyleNavLine.display = "none";
    StyleNav.boxShadow = "0px 0px 10px 0px #888888";
    StyleNav.transition = "all linear .2s";
    StyleNav.position = "fixed";
    StyleNav.top = "0px";
    StyleNav.backgroundColor = "white";
  } else {
    props.navbarLine === true ? (StyleNavLine.display = "") : (StyleNavLine.display = "none");
    props.navbarLine === true ? (StyleNav.backgroundColor = "white") : (StyleNav.backgroundColor = "transparent");
    StyleNav.transition = "all linear .2s";
  }
  return (
    <React.Fragment>
      <Hidden xsDown>
        <div id="navbar" style={StyleNav}>
          <Container maxWidth="xl">
            <Typography variant="h5" component="div" className="title_navbar">
              <Link to="/" className="link_router">
                LOGO
              </Link>
            </Typography>
            <Typography variant="body1" component="div" className="title_navbar">
              <Link to="/" className="link_router">
                خانه
              </Link>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              onMouseEnter={() => openDetails("men")}
              className="title_navbar"
              style={{ position: "relative" }}
            >
              <Link to="/shop" className="link_router">
                مردانه
              </Link>
              <ExpandMoreSharp style={{ position: "absolute", top: 40, right: 8 }} />
            </Typography>
            <Typography
              variant="body1"
              component="div"
              onMouseEnter={() => openDetails("women")}
              className="title_navbar"
              style={{ position: "relative" }}
            >
              <Link to="/shop" className="link_router">
                زنانه
              </Link>
              <ExpandMoreSharp style={{ position: "absolute", top: 40, right: 2 }} />
            </Typography>
            <Typography variant="body1" component="div" className="title_navbar">
              <Link to="/shop" className="link_router">
                فروش ویژه
              </Link>
            </Typography>
            <Typography variant="body1" component="div" className="title_navbar">
              <Link to="" className="link_router">
                تماس با ما
              </Link>
            </Typography>
            <Link to="">
              <ShoppingCartOutlined className="StyleLineNavbar" />
            </Link>
            <Link to="">
              <PersonOutlineOutlined className="StyleLineNavbar" />
            </Link>

            <div style={{ width: 200, float: "left", marginLeft: "25px" }}>
              <Autocomplete
                id="custom-input-demo"
                freeSolo
                options={options}
                disableClearable
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    size="small"
                    placeholder="جستجو"
                    margin="normal"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </div>
          </Container>
          <div ref={NavLineRef} style={StyleNavLine}></div>
        </div>
        <Container maxWidth="xl">
          <Collapse
            in={checked}
            ref={MouseEnterRef}
            onMouseLeave={(e) => {
              closeDetails(e);
            }}
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "white",
              zIndex: 10,
              boxShadow: "0px 5px 5px 0px #888888",
              position: "fixed",
              top: 70,
              right: 0,
            }}
          >
            <Grid container>
              <Grid item lg={5} align="center">
                <Typography variant="h6" align="center" style={{ marginTop: 50 }}>
                  لباس مردانه
                </Typography>
                <Typography component="div" variant="body2" style={{ width: 200, color: "grey" }}>
                  <List>
                    {generate(
                      <ListItem>
                        <Link to="" className="link_router">
                          پیرهن
                        </Link>
                      </ListItem>
                    )}
                  </List>
                </Typography>
              </Grid>
              <Grid item lg={2} align="center">
                <div style={{ width: 1, height: 400, backgroundColor: "#916DD5", marginTop: 50, marginBottom: 50 }}></div>
              </Grid>
              <Grid item lg={5} align="center">
                <img src={ImgNavbar} alt="فروشگاه" style={{ width: 300, height: 200, maxWidth: "100%", marginTop: 50, marginLeft: 10 }} />
              </Grid>
            </Grid>
          </Collapse>
        </Container>
      </Hidden>
    </React.Fragment>
  );
}
export default NavBar;
