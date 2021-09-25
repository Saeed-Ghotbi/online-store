import React from "react";
import Navbar from "../component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Footer from "../component/Footer";
import Card from "../component/Card";
import transparent from "../img/transparent.png";
import women from "../img/women1.png";
import baner1 from "../img/baner1.jpg";
import baner2 from "../img/baner2.jpg";
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
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpg";
import slide5 from "../img/slide5.jpg";
import "../sass/home.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

export default function Home(props) {
  const matches = useMediaQuery("(min-width:768px)");

  SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

  return (
    <React.Fragment>
      <Navbar navbarLine={false} />
      <Swiper
        navigation={matches}
        pagination={matches}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={matches ? 1 : 1.1}
        centeredSlides={matches ? false : true}
        spaceBetween={matches ? 0 : 10}
        effect={"slide"}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" className="slider_home" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" className="slider_home" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" className="slider_home" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" className="slider_home" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" className="slider_home" />
        </SwiperSlide>
      </Swiper>
      <Container maxWidth="lg">
        <Grid container direction="column" justifyContent="center" spacing={matches ? 5 : 0}>
          <Grid container item>
            <Grid item xs={12} lg={6} align="center">
              <Typography variant="h6">
                <Link to="/shop" className="link_router">
                  ست مردانه
                </Link>
              </Typography>
              <div style={{ width: 105 }} className="underline_home"></div>
              <Link to="/shop">
                <img src={baner1} alt="setmen" className="banner_medium" />
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
                <img src={baner2} alt="setwemen" className="banner_medium" />
              </Link>
            </Grid>
          </Grid>

          <Grid item lg={12} align="center">
            <Button variant="contained" size="large" className="btn_filter">
              بیشترین تخفیف ها
            </Button>
            <Button variant="contained" size="large" className="btn_filter">
              پر فروش ترین ها
            </Button>
            <Button variant="contained" size="large" className="btn_filter">
              جدید ترین ها
            </Button>
            {/* <Swiper slidesPerView={3}>
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
            </Swiper> */}
          </Grid>

          <Grid item align="center">
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
          <Grid container item>
            <Grid item lg={12} xs={12} align="center">
              <Typography variant="h6">ویژگی های ما</Typography>
              <div style={{ width: 135 }} className="underline_home"></div>
            </Grid>
            <Grid item lg={4} xs={12} align="center">
              <img src={property1} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                ضمانت اصالت کالا
              </Typography>
              <Typography variant="body2">تمامی کالاها به صورت اورجینال و با ضمانت اصل بودن ارائه می شود</Typography>
            </Grid>
            <Grid item lg={4} xs={12} align="center">
              <img src={property2} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                مرجوع کالا
              </Typography>
              <Typography variant="body2">
                خرید از 300 برند بین المللی و ایرانی در هر ساعت شبانه روز و در هر نقطه از کشور برای شما فراهم شده است{" "}
              </Typography>
            </Grid>
            <Grid item lg={4} xs={12} align="center">
              <img src={property3} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                تنوع محصولات
              </Typography>
              <Typography variant="body2">با خیال راحت میتوانید در صورت عدم رضایت، کالای خریداری شده را تعویض یا مرجوع نمایید</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
