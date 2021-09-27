// import { red } from "@material-ui/core/colors";
import React from "react";
import { Typography } from "@material-ui/core";
import "../sass/Card.scss";
import image from "../img/men-home1.jpg";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card_style">
      <Link to="/details" className="link_router">
        <img src={image} alt="محصول" className="image_card" />
        {/* <Typography
            variant="body1"
            component="div"
            style={{
              width: 50,
              height: 20,
              backgroundColor: "#e53935",
              marginLeft: "2%",
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              borderRadius: 10,
              float: "left",
            }}
          >
            30%
          </Typography> */}
        <div style={{ width: "100%", height: 50 }}>
          <Typography variant="h5" component="div" align="left" style={{ wordWrap: "break-word", float: "right", lineHeight: "50px" }}>
            LC Waikiki
          </Typography>
          <Typography variant="body1" component="div" style={{ float: "left", lineHeight: "50px" }}>
            <del>120,000</del>
          </Typography>
        </div>
        <div style={{ width: "100%", height: 50 }}>
          <Typography variant="h6" component="div" style={{ position: "absolute", right: 30, lineHeight: "50px" }}>
            هودی مردانه مدل صورتی با جنس مخمل
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{ width: "40%", position: "absolute", left: 0, lineHeight: "50px", backgroundColor: "white" }}
          >
            <span style={{ float: "right" }}>...</span>
            99,000 تومان
          </Typography>
        </div>
        <div style={{ width: "100%", height: 50 }}>
          <Typography
            variant="body1"
            component="div"
            style={{
              width: 25,
              height: 25,
              border: "1px solid #d6d5d5",
              borderRadius: 5,
              textAlign: "center",
              lineHeight: "25px",
              float: "right",
            }}
          >
            Xl
          </Typography>
          <Typography
            variant="body1"
            component="div"
            style={{
              width: 25,
              height: 25,
              border: "1px solid #d6d5d5",
              borderRadius: 5,
              textAlign: "center",
              lineHeight: "25px",
              float: "right",
              marginRight: 10,
            }}
          >
            Lg
          </Typography>
        </div>
      </Link>
    </div>
  );
}
