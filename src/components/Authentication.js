import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

function Authentication() {
  const [openReg, setOpenReg] = useState(false);
  const { toggleLogin } = useSelector((state) => state.cart);

  console.log(toggleLogin);
  return (
    <BodyAuth className={toggleLogin ? "openAuth activeAuth" : "openAuth"}>
      <div className={toggleLogin ? "open active" : "open"}>
        <div className="shadow-md auth_body">
          <Login setOpenReg={setOpenReg} openReg={openReg} />
          <Register openReg={openReg} setOpenReg={setOpenReg} />
        </div>
      </div>{" "}
    </BodyAuth>
  );
}

export default Authentication;

const Login = ({ setOpenReg, openReg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setEorr] = useState(false);
  const [loading, setLoading] = useState(false);
  // let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  const onSubmit = (e) => {
    e.preventDefault();

    // if (email >= 0 || password.length >= 5) {
    //   setEorr(true);
    // }

    setLoading(true);
    const data = {
      email,
      password,
    };

    axios
      .post("https://commerce-backend-rho.vercel.app/api/v1/auth/login", data, {
        headers: {
          "Content-Type": "application/json, text/plain",
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={!openReg ? "login active_log" : "login"}>
      <div>
        <h2>Login To Your Account</h2>
      </div>

      <div className="form_body">
        <form onSubmit={onSubmit}>
          <div className="form_item">
            <input
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span>
              {error && email.length >= 0 ? "Input must be an Email" : ""}
            </span>
          </div>
          <div className="form_item">
            <input
              placeholder="Enter Your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              {error && password.length >= 5 ? "Password is required" : ""}
            </span>
          </div>

          <div className="button_back">
            <button type="submit" disabled={loading}>
              {loading ? <ScaleLoader color="white" /> : " Login "}
            </button>
          </div>
        </form>

        <div className="acc" onClick={() => setOpenReg(!openReg)}>
          <p>Not Have an Account? Create New Account</p>
        </div>
      </div>
    </div>
  );
};
const Register = ({ setOpenReg, openReg }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setEorr] = useState(false);
  const [loading, setLoading] = useState(false);
  // let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      fullName.length <= 0 ||
      email === 0 ||
      phone.length === 0 ||
      password.length === 0 ||
      password.length >= 5
    ) {
      setEorr(true);
    }

    setLoading(true);
    const data = {
      fullName,
      email,
      phone,
      password,
    };

    axios
      .post("https://commerce-backend-rho.vercel.app/api/v1/auth/login", data, {
        headers: {
          "Content-Type": "application/json, text/plain",
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={openReg ? "register active" : "register"}>
      <div>
        <h2>Create New Account</h2>
      </div>

      <div className="form_body">
        <form onSubmit={onSubmit}>
          <div className="form_item">
            <input
              placeholder="Enter Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <span>
              {error && fullName.length <= 0
                ? "Text field cannot be empty"
                : ""}
            </span>
          </div>
          <div className="form_item">
            <input
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>
              {error && email.length <= 0 ? "Input must be an Email" : ""}
            </span>
          </div>
          <div className="form_item">
            <input
              placeholder="Enter Your Phone Number"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span>
              {error && phone.length <= 0 ? "Phone Number is required" : ""}
            </span>
          </div>
          <div className="form_item">
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span>
              {error && password.length <= 0 ? "Password is required" : ""}
            </span>
          </div>

          <div className="button_back">
            <button type="submit" disabled={loading}>
              {loading ? <ScaleLoader /> : " Register "}
            </button>
          </div>
        </form>

        <div className="acc" onClick={() => setOpenReg(!openReg)}>
          <p>Already have an Account? Login</p>
        </div>
      </div>
    </div>
  );
};

const BodyAuth = styled.div`
  padding-top: 8rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #4f4f4f89;

  height: 100%;
  .open {
    /* transition: 0.4s; */
    transform: translateY(-200%);
  }

  .open.active {
    transform: translateY(0%);
  }

  .auth_body {
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    border: 0.1px solid rgba(192, 201, 210, 0.5);
    transition: 0.4s;

    height: 500px;
    background-color: #fff;
    width: 400px;
    margin: 0 auto;

    @media screen and (max-width: 400px) {
      width: 300px;
    }
  }

  .form_body {
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .form_item {
        input {
          border: 1px solid rgba(192, 201, 210, 0.5);
          padding: 5px;
          width: 100%;
          outline: none;
        }
      }
      .button_back {
        display: flex;
        align-items: center;
        button {
          width: 100%;
          height: 40px;
          font-size: 0.7rem;
          color: #fff;
          background-color: #000;
          border-color: #ed1d24;
          text-transform: uppercase;
          transition: 0.3s;

          display: flex;
          align-items: center;
          justify-content: center;

          span {
            font-size: 0.6rem;
            font-weight: 600;
            cursor: pointer;
          }
          :hover {
            background-color: #ed1d24;
          }
        }
      }
    }

    .acc {
      margin-top: 1rem;
      p {
        color: grey;
        cursor: pointer;

        :hover {
          color: #ed1d24;
        }
      }
    }
  }

  .register {
    position: absolute;
    padding: 1rem;
    width: 100%;
    top: 0;
    left: -100%;
    background: #fff;
    transition: all 0.3s ease-in-out;
  }

  .active.register {
    left: 0;
  }

  .login {
    position: absolute;
    width: 100%;
    padding: 1rem;

    top: 0;
    right: -100%;
    background: #fff;
    transition: all 0.3s ease-in-out;
  }

  .active_log.login {
    right: 0;
  }
`;
