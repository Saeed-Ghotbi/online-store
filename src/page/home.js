import React from "react";
import Navbar from "../component/NavBar";
import Card from "../component/Card";
import transparent from "../img/transparent.png";
import women from "../img/women1.png";
import setMen from "../img/mardaneh1.jpg";
import setWomen from "../img/women-dess1.jpg";
import logo1 from "../img/logo1.jpg";
import logo2 from "../img/logo2.jpg";
import logo3 from "../img/logo3.jpg";
import logo4 from "../img/logo4.jpg";
import logo5 from "../img/logo5.jpg";
import logo6 from "../img/logo6.jpg";
import logo7 from "../img/logo7.jpg";
import property1 from "../img/esalat1.png";
import property2 from "../img/marjoo1.png";
import property3 from "../img/tanavo1.png";

import "../css/home.css";
import Footer from "../component/Footer";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.scss";

import { Button, Grid, Container, Typography } from "@material-ui/core";

// import { Container } from "@material-ui/core";
export default function Home(props) {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <React.Fragment>
      <Navbar navbarLine={false} />
      <div style={{ width: "100%", height: 500, backgroundColor: "#F0E3FF", marginBottom: 20 }}>
        <Container>
          <Grid container justify="center" alignItems="center" style={{ height: 500 }}>
            <Grid item sm={12} lg={6} align="center">
              <Typography variant="h4" style={{ padding: 30 }}>
                فروش محصولات برند آرت من
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600, padding: 10 }}>
                ART MAN
              </Typography>
              <Typography variant="h6" style={{ fontWeight: 600, color: "#916DD5", padding: 10 }}>
                تا 30% تخفیف
              </Typography>
              <Link to="/shop" className="link_router">
                <Button size="large" variant="contained" style={{ backgroundColor: "#916DD5", color: "white", marginTop: 10 }}>
                  برو به فروشگاه
                </Button>
              </Link>
            </Grid>
            <Grid item sm={12} lg={6}>
              <div style={{ width: "100%", position: "absolute" }}>
                <img
                  src={transparent}
                  alt="GT"
                  style={{ width: "400px", maxWidth: "100%", height: "auto", position: "absolute", top: -35, right: 100 }}
                />
                <img src={women} alt="GT" style={{ width: "550px", maxWidth: "100%", height: "auto", position: "absolute", top: -163, right: 17 }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid justify="center" alignItems="center" container spacing={5}>
          <Grid item xs={12} lg={6} align="center">
            <Typography variant="h6">
              <Link to="/shop" className="link_router">
                ست مردانه
              </Link>
            </Typography>
            <div style={{ width: 105 }} className="underline_home"></div>
            <Link to="/shop">
              <img src={setMen} alt="setmen" style={{ marginTop: 30, maxWidth: "100%" }} />
            </Link>
          </Grid>
          <Grid item xs={12} lg={6} align="center">
            <Typography variant="h6">
              <Link to="/shop" className="link_router">
                ست زنانه
              </Link>
            </Typography>
            <div style={{ width: 95 }} className="underline_home"></div>
            <Link to="/shop">
              <img src={setWomen} alt="setwemen" style={{ marginTop: 30, maxWidth: "100%" }} />
            </Link>
          </Grid>
          <Grid item lg={12} align="center">
            <div style={{ marginBottom: 20 }}>
              <Button variant="contained" size="large" className="btn_filter">
                بیشترین تخفیف ها
              </Button>
              <Button variant="contained" size="large" className="btn_filter">
                پر فروش ترین ها
              </Button>
              <Button variant="contained" size="large" className="btn_filter">
                جدید ترین ها
              </Button>
            </div>
            <div style={{ width: "100%", marginTop: 10 }}>
              {/* <div style={{ width: 3000, height: 500 }}>
                  <Card float="right" marginRight="10px" />
                  <Card float="right" marginRight="10px" />
                  <Card float="right" marginRight="10px" />
                  <Card float="right" marginRight="10px" />
                </div> */}
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
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
          </Grid>

          <Grid item lg={12} align="center">
            <Typography variant="h6">برترین برند ها</Typography>
            <div style={{ width: 135 }} className="underline_home"></div>
            <div style={{ width: "100%" }}>
              <img src={logo1} alt="logo" className="brand_style" />
              <img src={logo2} alt="logo" className="brand_style" />
              <img src={logo3} alt="logo" className="brand_style" />
              <img src={logo4} alt="logo" className="brand_style" />
              <img src={logo5} alt="logo" className="brand_style" />
              <img src={logo6} alt="logo" className="brand_style" />
              <img src={logo7} alt="logo" className="brand_style" />
            </div>
          </Grid>
          <Grid item lg={12} align="center">
            <Typography variant="h6">ویژگی های ما</Typography>
            <div style={{ width: 135 }} className="underline_home"></div>
          </Grid>
          <Grid item lg={4} align="center">
            <div>
              <img src={property1} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                ضمانت اصالت کالا
              </Typography>
              <Typography variant="body2">تمامی کالاها به صورت اورجینال و با ضمانت اصل بودن ارائه می شود</Typography>
            </div>
          </Grid>
          <Grid item lg={4} align="center">
            <div>
              <img src={property2} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                مرجوع کالا
              </Typography>
              <Typography variant="body2">
                خرید از 300 برند بین المللی و ایرانی در هر ساعت شبانه روز و در هر نقطه از کشور برای شما فراهم شده است{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} align="center">
            <div>
              <img src={property3} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                تنوع محصولات
              </Typography>
              <Typography variant="body2">با خیال راحت میتوانید در صورت عدم رضایت، کالای خریداری شده را تعویض یا مرجوع نمایید</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
