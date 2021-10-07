import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography, Hidden, useMediaQuery } from "@material-ui/core";

import { FavoriteBorder } from "@material-ui/icons";
import { Link } from "react-router-dom";
import image from "../img/men-home1.jpg";
import "../sass/Card.scss";
export default function Card(props) {
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="card_style">
      <Link to="/details" className="link_router">
        <img src={image} alt="محصول" className="image_card" />
        <div className="favorite_card">
          <FavoriteBorder style={{ fontSize: "28px" }} />
        </div>
        <Typography variant="h5" component="div" className="percent_card">
          30%
        </Typography>
        <div className="dv_details_card">
          <Typography variant="h5" component="div" align="left" className="title_card">
            LC Waikiki
          </Typography>
          <Hidden mdDown>
            <Typography variant="body1" component="div" className="price_delete">
              <del>120,000</del>
            </Typography>
          </Hidden>
        </div>
        <div className="dv_details_card">
          <Typography variant="h6" component="div" className="subtitle_card">
            هودی مردانه مدل صورتی با جنس مخمل
          </Typography>
          <Hidden mdDown>
            <Typography variant="h6" component="div" className="price_card">
              99,000 تومان
            </Typography>
          </Hidden>
        </div>
        <Hidden mdDown>
          <div className="dv_size_card">
            <Typography variant="body1" component="div" className="size_card">
              Xl
            </Typography>
            <Typography variant="body1" component="div" className="size_card">
              Lg
            </Typography>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="dv_details_card">
            <Typography variant="h6" component="div" className="price_delete">
              <del>120,000</del>
            </Typography>
            <Typography variant="h6" component="div" className="price_card">
              99,000 تومان
            </Typography>
          </div>
        </Hidden>
      </Link>
    </div>
  );
}
