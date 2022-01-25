import React, { useState } from "react";
import { Button, Grid, Container, Link, Typography, Select, FormControl, InputLabel, MenuItem, Hidden, useMediaQuery } from "@material-ui/core";
import { FavoriteBorder, Share, KeyboardArrowDown, KeyboardArrowUp, ShoppingCartOutlined } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import Appbar from "../components/Appbar";
import "../sass/details-shop.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Card from "../components/Card";
import Footer from "../components/Footer";
import imgcard from "../img/men-home1.jpg";
import imgprpduct from "../img/هودی-مردانه.png";
export default function Details(props) {
  // const [size, setSize] = useState("");
  // const [name, setName] = useState("xl");
  const [age] = useState();

  function handleChange(event) {
    // const name = event.target.name;
    // setName({ [name]: event.target.value });
  }
  const colorArray = ["red", "green", "blue", "yellow", "pink", "grey", "orange", "#9400D3", "#00CED1"];
  const colorRepeat = colorArray.map((color, index) => {
    return (
      <Link color="inherit" key={index} underline="none" href="#" style={{ width: 50, height: 50, float: "right" }}>
        <div style={{ backgroundColor: color }} className="dv_color_product"></div>
      </Link>
    );
  });
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      <NavBar navbarLine={true} />
      <Container maxWidth="xl" style={{ paddingTop: 70 }}>
        <Grid container spacing={1}>
          <Grid container item lg={6} sm={12}>
            <Hidden smDown>
              <Grid item lg={2} style={{ height: 450 }}>
                <KeyboardArrowUp className="arrow_Perview" style={{ marginTop: 5 }} />
                <Swiper slidesPerView={4} direction="vertical" style={{ width: "100%", height: "100%", paddingTop: 5 }}>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={imgcard} alt="" className="image_Perview" />
                  </SwiperSlide>
                </Swiper>
                <KeyboardArrowDown className="arrow_Perview" style={{ marginBottom: 5 }} />
              </Grid>
            </Hidden>
            <Grid item lg={10}>
              <img
                src={imgprpduct}
                alt=""
                style={{
                  width: 500,
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 10,
                  border: "1px solid rgb(145, 109, 213)",
                  display: "block",
                  marginTop: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Grid>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
              <div>
                <Typography variant="h2" component="div">
                  JootiJeans by Jeanswest
                </Typography>
                <Typography variant="h6" component="div">
                  هودی مردانه جوتی جینز JootiJeans کد 94551702
                </Typography>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "end" }}>
                <Link color="inherit" underline="none" href="#">
                  <div className="btn_share_favorite">
                    <FavoriteBorder />
                  </div>
                </Link>
                <Link color="inherit" underline="none" href="#">
                  <div className="btn_share_favorite">
                    <Share />
                  </div>
                </Link>
              </div>
            </div>

            <div style={{ height: 40, borderBottom: "1px solid #916DD5", clear: "both", float: "right", marginTop: 50 }}>
              <Typography variant="h5" component="div">
                999,000 تومان
              </Typography>
            </div>
            <Typography variant="h6" component="div" style={{ clear: "right", float: "right", marginTop: 30, marginBottom: 20 }}>
              رنگ:
            </Typography>
            <div style={{ clear: "both", display: "flex", alignItems: "center", flexWrap: "wrap" }}>{colorRepeat}</div>
            <div>
              <FormControl variant="outlined" style={{ width: 190 }}>
                <InputLabel htmlFor="outlined-age">انتخاب سایز</InputLabel>
                <Select
                  value={age}
                  onChange={handleChange}
                  label="انتخاب سایز"
                  inputProps={{
                    name: "size",
                    id: "outlined-age",
                  }}
                >
                  <MenuItem value={10}>S</MenuItem>
                  <MenuItem value={20}>M</MenuItem>
                  <MenuItem value={30}>L</MenuItem>
                  <MenuItem value={40}>XL</MenuItem>
                  <MenuItem value={50}>XXL</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: 30 }}>
              <Button variant="contained" size="large" startIcon={<ShoppingCartOutlined />} style={{ backgroundColor: "#3e206d", color: "white" }}>
                افزودن به سبد خرید
              </Button>
            </div>
          </Grid>
        </Grid>
        <div style={{ marginTop: 50 }}>
          <Typography variant="h2" component="div">
            مشخصات محصول
          </Typography>
          <div style={{ width: "100%", height: "100%", backgroundColor: "#FAF5FF", borderRadius: 10 }}>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto", backgroundColor: "white", lineHeight: "50px" }}>
              <Typography variant="body1" component="span">
                کد محصول
              </Typography>
              <Typography variant="body2" component="span">
                nsjhf45
              </Typography>
            </div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }}></div>
            <div style={{ width: "95%", height: 50, marginLeft: "auto", marginRight: "auto" }}></div>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>
          <Typography variant="h2" component="div">
            محصولات مشابه
          </Typography>
          <Grid item xl={12} xs={12} align="center">
            <Swiper slidesPerView={device ? 4.2 : 2.5} spaceBetween={device ? 20 : 10}>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </div>
        <Appbar type="down" value={0} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
