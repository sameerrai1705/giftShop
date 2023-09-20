import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Gift Box</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p> */}
            {/* <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div> */}
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Sameer Rai</li>
              <li>Vaibhav Ojha</li>
              <li>Soumajjal Kundu</li>
              <li>Ankon</li>
              <li>Vivan Jha</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              {/* <li>Track Your Order </li> */}
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>NIT DURGAPUR </li>
              <li>
                Email ids:
                <li>sameerrai16050@gmail.com</li>
                <li>Vaibhavojha2002@gmail.com</li>
                <li>soumajjal@gmail.com</li>
                <li>ankon3210@gmail.com</li>
                <li>vivaanjha2002@gmail.com</li>
              </li>
              <li>Phone: +91 8528494334</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
