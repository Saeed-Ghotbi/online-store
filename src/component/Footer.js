import React from "react";
import { Container, Button, Link, Grid, Typography, Hidden } from "@material-ui/core";
import "../sass/footer.scss";
import { Instagram, YouTube, Telegram, Twitter } from "@material-ui/icons";

export default function Footer(props) {
  return (
    <Hidden mdDown>
      <div className="style_dv_footer">
        <Container style={{ paddingTop: 20 }}>
          <Grid container>
            <Grid item lg={4} align="right">
              <Typography variant="h6">خدمات مشتریان</Typography>
              <Typography variant="body2" component="div">
                <div className="li_footer">پاسخ به پرسش های متداول</div>
                <div className="li_footer">رویه بازگرداندن کالا</div>
                <div className="li_footer">شرایط استفاده</div>
                <div className="li_footer">حریم خصوصی</div>
              </Typography>
            </Grid>
            <Grid item lg={4} align="right">
              <Typography variant="h6">اطلاعات فروشگاه</Typography>
              <Typography variant="body2" component="div">
                <div className="li_footer">درباره ما</div>
                <div className="li_footer">تماس با ما</div>
                <div className="li_footer">پشتیبانی</div>
              </Typography>
            </Grid>
            <Grid item lg={4} align="center">
              <Typography variant="h5" style={{ padding: 10 }}>
                LOGO
              </Typography>
              <Button
                size="large"
                variant="outlined"
                style={{ borderRadius: 20, borderColor: "#916DD5", color: "#916DD5", clear: "left", float: "left", marginLeft: 130 }}
              >
                دانلود اپلیکیشن
              </Button>
              <div style={{ marginLeft: 60 }}>
                <Link href="#">
                  <Instagram style={{ width: 25, height: 25, color: "black", clear: "left", float: "left", margin: 20 }} />
                </Link>
                <Link href="#">
                  <YouTube style={{ width: 25, height: 25, color: "black", float: "left", margin: 20 }} />
                </Link>
                <Link href="#">
                  <Telegram style={{ width: 25, height: 25, color: "black", float: "left", margin: 20 }} />
                </Link>
                <Link href="#">
                  <Twitter style={{ width: 25, height: 25, color: "black", float: "left", margin: 20 }} />
                </Link>
                <div style={{ width: 260, height: 1, backgroundColor: "#916DD5", clear: "left", float: "left" }}></div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Hidden>
  );
}
