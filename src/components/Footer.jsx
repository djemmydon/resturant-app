import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Body>
      <Footer1>
        {/* Contact Information */}

        <div className="contact_information">
          <div className="header">
            <h2>Contact Information</h2>
          </div>

          <div className="contact_flex">
            <p>Call Us 24/7 Free</p>
            <h2>+2349 0651 92164 </h2>
            <p>okinochukwuemeka@gmail.com</p>
            <p>40, IK Dairo Street, Iwo-Road, Ibadan</p>
          </div>
        </div>

        {/* End of Contact Information */}
        {/* Contact Information */}

        <div className="company">
          <div className="header">
            <h2>Contact Information</h2>
          </div>

          <ul>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Delivery</Link>
            </li>
            <li>
              <Link to="/">Legal Notice</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
          </ul>
        </div>

        {/* End of Contact Information */}
        {/* Contact Information */}

        <div className="explore">
          <div className="header">
            <h2>Contact Information</h2>
          </div>

          <ul>
            <li>
              <Link to="/">Shipping Return</Link>
            </li>
            <li>
              <Link to="/">Our Policy</Link>
            </li>
            <li>
              <Link to="/">Term</Link>
            </li>
            <li>
              <Link to="/">Gift Smile</Link>
            </li>
            <li>
              <Link to="/">Credit Care</Link>
            </li>
            <li>
              <Link to="/">Size Guide</Link>
            </li>
          </ul>
        </div>

        {/* End of Contact Information */}
        {/* Contact Information */}

        <div className="our_location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7913.10979695354!2d3.935025896386572!3d7.403664378527616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103992dc3d5f95bd%3A0x28b52676dc7a7f6!2sIwo%20Road%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1678052174857!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ width: "100%", height: "250px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="myFrame"
          ></iframe>
        </div>

        {/* End of Contact Information */}
      </Footer1>
      <Footer2>
        <div className="text">
          <p>
            © 2020 Powered by{" "}
            <a
              href="https://peculiar-blog.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Peculiar
            </a>
            . All Rights Reserved.
          </p>
        </div>

        <div className="image">
          <img src="/img/payment-1.png" alt="" />
        </div>
      </Footer2>
    </Body>
  );
}

export default Footer;

const Body = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
`;

const Footer1 = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 4rem 4rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
    padding: 4rem 1rem;
    justify-content: flex-start;
    
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 1rem 1rem;
    gap: 1rem;
  }
  .header {
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }

  .contact_information {
    padding: 10px 15px;
    width: 400px;

    .contact_flex {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      h2 {
        font-size: 2rem;
        font-weight: 400;
        color: #ed1d24;
        line-height: 20px;
        @media screen and (max-width: 600px) {
        font-size: 1.5rem;

        }
      }
    }
  }

  .company,
  .explore {
    padding: 10px 15px;

    width: 250px;

    ul {
      display: inline-flex;
      flex-direction: column;
      gap: 10px;

      li {
        position: relative;
        padding-bottom: 2px;
        transition: 0.4s ease-in-out;
        font-size: 0.8rem;

        &::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 1.5px;
          background: #ed1d24;
          bottom: 0;
          transition: 0.4s ease-in-out;
        }
        :hover::before {
          width: 100%;
        }
      }
    }
  }

  .our_location {
    width: 400px;
    border: 1px solid red;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
    @media screen and (max-width: 400px) {
    }
  }
`;
const Footer2 = styled.div`
  padding: 2rem 4rem;
  background-color: #323232;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    height: 20px;

    @media screen and (max-width: 500px) {
      height: 15px;
    }

    img {
      height: 100%;
    }
  }
  .text {
    p {
      color: #fff;
    }

    a {
      color: #ed1d24;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;

    .text {
      p {
        font-size: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
  }
`;
