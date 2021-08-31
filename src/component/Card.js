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
        <img
          src={image}
          alt="محصول"
          style={{ maxWidth: "95%", height: "auto", marginRight: "auto", marginLeft: "auto", marginTop: "2%", display: "block" }}
        />
        <Typography variant="h6" component="div" align="left" style={{ wordWrap: "break-word", marginRight: "2%" }}>
          هودی مردانه
        </Typography>
        <div style={{ height: 70 }}>
          <Typography variant="body2" component="div" style={{ marginRight: "2%", color: "#8B8A8A", float: "right" }}>
            <del>120,000</del>
          </Typography>
          <Typography variant="body1" component="div" style={{ marginRight: "2%", color: "#916DD5", fontWeight: 600, float: "right" }}>
            99,000 تومان
          </Typography>
          <Typography
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
          </Typography>
          <div style={{ float: "left", width: 100, height: 20, clear: "left", marginLeft: "1%", marginTop: 20 }}>
            <div style={{ width: 10, height: 10, backgroundColor: "blue", float: "left", borderRadius: 10, marginTop: 5, marginLeft: 5 }}></div>
            <div style={{ width: 10, height: 10, backgroundColor: "red", float: "left", borderRadius: 10, marginTop: 5, marginLeft: 5 }}></div>
            <div style={{ width: 10, height: 10, backgroundColor: "pink", float: "left", borderRadius: 10, marginTop: 5, marginLeft: 5 }}></div>
            <div style={{ width: 10, height: 10, backgroundColor: "yellow", float: "left", borderRadius: 10, marginTop: 5, marginLeft: 5 }}></div>
          </div>
          <div style={{ float: "right", height: 25, clear: "right", marginRight: "2%", marginTop: 10 }}>
            <Typography
              variant="body1"
              component="div"
              style={{
                width: 25,
                height: 25,
                border: "1px solid black",
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
                border: "1px solid black",
                textAlign: "center",
                lineHeight: "25px",
                float: "right",
                marginRight: 10,
              }}
            >
              Lg
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
}
