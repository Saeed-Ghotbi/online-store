import React from "react";
import Navbar from "../component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Button, Grid, Container, Typography, Hidden } from "@material-ui/core";
import { Call, ChatBubbleOutline, MailOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Appbar from "../component/Appbar";
import Footer from "../component/Footer";
import Card from "../component/Card";

import baner1 from "../img/baner1.jpg";
import baner2 from "../img/baner2.jpg";
import support from "../img/support.svg";
import originality from "../img/originality.svg";
import delivery from "../img/delivery.svg";
import warranty from "../img/warranty.svg";
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

export default function HomePage(props) {
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));
  SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);
  const BrandImg = ["brand1", "brand2", "brand3", "brand4", "brand5", "brand6", "brand7", "brand8", "brand9", "brand10", "brand11"];
  const Brand = BrandImg.map((brand, index) => (
    <SwiperSlide key={index}>
      <img src={require(`../img/${brand}.jpg`).default} alt={brand} className="brand_style" />
    </SwiperSlide>
  ));

  return (
    <>
      <Navbar navbarLine={false} />
      <Swiper
        navigation={device}
        pagination={device}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={device ? 1 : 1.1}
        centeredSlides={device ? false : true}
        spaceBetween={device ? 0 : 10}
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
      <Container maxWidth="xl">
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={device ? 10 : 5}>
          <Grid container item alignItems="center" spacing={device ? 2 : 1}>
            <Grid item xl={6} xs={6} align="right">
              <Typography variant="h1" style={{ color: "#db2e20" }}>
                شگفت انگیز های روز
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
              <Hidden mdDown>
                <Typography variant="h4" className="title_sale_time">
                  زمان باقیمانده تا پایان سفارش
                </Typography>
              </Hidden>
              <div className="dv_sale_time">15</div>
              <div className="dot_sale_time">:</div>
              <div className="dv_sale_time">22</div>
              <div className="dot_sale_time">:</div>
              <div className="dv_sale_time">03</div>
            </Grid>
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
          </Grid>

          <Grid container item>
            <Grid item xs={12} lg={6} align="center">
              <Link to="/shop">
                <img src={baner1} alt="setmen" className="banner_medium" />
              </Link>
            </Grid>
            <Grid item xs={12} lg={6} align="center">
              <Link to="/shop">
                <img src={baner2} alt="setwemen" className="banner_medium" />
              </Link>
            </Grid>
          </Grid>

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

          <Grid container item className="background_grey">
            <Grid item xl={12} xs={12} align="center">
              <Typography variant="h3">برترین برند ها</Typography>
            </Grid>
            <Grid item xl={12} xs={12} align="center">
              <Swiper
                slidesPerView={device ? 8 : 3}
                spaceBetween={device ? 10 : 5}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {Brand}
              </Swiper>
              <Button variant="outlined" size={device ? "large" : "small"} style={{ marginTop: device ? 20 : 10, marginBottom: device ? 20 : 10 }}>
                مشاهده همه برند ها
              </Button>
            </Grid>
          </Grid>

          <Grid container item spacing={2}>
            <Grid item lg={12} xs={12} align="center">
              <Typography variant="h3">ویژگی های ما</Typography>
            </Grid>
            <Grid item lg={3} xs={3} align="center">
              <img src={support} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                خدمات پس از فروش
              </Typography>
              <Hidden mdDown>
                <Typography variant="body1">
                  میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تلاش با تمام قوا برای ارائه بهترین خدمات به مشتریان عزیز می باشد.
                </Typography>
              </Hidden>
            </Grid>
            <Grid item lg={3} xs={3} align="center">
              <img src={originality} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                ضمانت اصالت
              </Typography>
              <Hidden mdDown>
                <Typography variant="body1">تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند. </Typography>
              </Hidden>
            </Grid>
            <Grid item lg={3} xs={3} align="center">
              <img src={delivery} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                تحویل سریع و آسان
              </Typography>
              <Hidden mdDown>
                <Typography variant="body1">
                  ارسال رایگان برای خریدهای بالای 300 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                </Typography>
              </Hidden>
            </Grid>
            <Grid item lg={3} xs={3} align="center">
              <img src={warranty} alt="logo" className="brand_style" />
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                ضمانت بازگشت کالا
              </Typography>
              <Hidden mdDown>
                <Typography variant="body1">تا 15 روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده می‌شود. </Typography>
              </Hidden>
            </Grid>
          </Grid>

          <Hidden mdUp>
            <Grid container item className="background_grey" spacing={2}>
              <Grid item align="center" xs={12}>
                <Typography variant="h5">میزبان صدای گرمتان هستیم</Typography>
              </Grid>
              <Grid item align="center" xs={12}>
                <Typography variant="h6" className="text_contact_us">
                  7 روز هفته-24 ساعته
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "50px",
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <Call />
                </div>
                <Typography variant="h6" className="text_contact_us">
                  021-910002445
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "50px",
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <ChatBubbleOutline />
                </div>
                <Typography variant="h6" className="text_contact_us">
                  10001677
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "50px",
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <MailOutline />
                </div>
                <Typography variant="h6" className="text_contact_us">
                  saeedghotbi@outlook.com
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <Appbar type="down" value={0} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
