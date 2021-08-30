import React, { useState } from "react";
import { Button, Grid, Container, Link, Typography, Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { FavoriteBorder, Share, KeyboardArrowDown, KeyboardArrowUp, ShoppingCartOutlined } from "@material-ui/icons";
import NavBar from "../component/NavBar";
import "../css/details-shop.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Card from "../component/Card";
import Footer from "../component/Footer";
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

  return (
    <React.Fragment>
      <NavBar navbarLine={true} />
      <Container maxWidth="xl" style={{ paddingTop: 70 }}>
        <Grid container spacing={1}>
          <Grid item lg={6} sm={12}>
            <div style={{ width: "80%", float: "left" }}>
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
            </div>
            <div style={{ width: "20%", float: "right", height: 480 }}>
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
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div style={{ float: "right", marginTop: 20 }}>
              <Typography variant="h5" component="div">
                JootiJeans by Jeanswest
              </Typography>
              <Typography variant="body2" component="div">
                هودی مردانه جوتی جینز JootiJeans کد 94551702
              </Typography>
            </div>
            <div style={{ float: "left", marginTop: 10 }}>
              <Link color="inherit" underline="none" href="#" style={{ float: "left", margin: 10 }}>
                <div className="btn_share_favorite">
                  <FavoriteBorder />
                </div>
              </Link>
              <Link color="inherit" underline="none" href="#" style={{ float: "left", margin: 10 }}>
                <div className="btn_share_favorite">
                  <Share />
                </div>
              </Link>
            </div>
            <div style={{ height: 40, borderBottom: "1px solid #916DD5", clear: "both", float: "right", marginTop: 50 }}>
              <Typography variant="h5" component="div">
                999,000 تومان
              </Typography>
            </div>
            <Typography variant="h6" component="div" style={{ clear: "right", float: "right", marginTop: 30 }}>
              رنگ:
            </Typography>
            <div style={{ clear: "both", marginTop: 10 }}>
              <Swiper spaceBetween={10} slidesPerView={6} freeMode={true}>
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
            </div>
            <div style={{ marginTop: 30 }}>
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
          <Typography variant="h5" component="div">
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
          <Typography variant="h5" component="div">
            محصولات مشابه
          </Typography>
          <Swiper spaceBetween={20} slidesPerView={4} style={{ marginTop: 10 }}>
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
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
