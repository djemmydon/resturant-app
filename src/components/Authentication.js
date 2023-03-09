import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  return (
    <div className={!openReg ? "login active_log" : "login"}>
      <div>
        <h2>Login To Your Account</h2>
      </div>

      <div className="form_body">
        <form>
          <div className="form_item">
            <input placeholder="Enter Your Email" type="email" />
          </div>
          <div className="form_item">
            <input placeholder="Enter Your Password" type="password" />
          </div>

          <div className="button_back">
            <button>{" Login"}</button>
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
  return (
    <div className={openReg ? "register active" : "register"}>
      <div>
        <h2>Create New Account</h2>
      </div>

      <div className="form_body">
        <form>
          <div className="form_item">
            <input placeholder="Enter Full Fame" type="text" />
          </div>
          <div className="form_item">
            <input placeholder="Enter Your Email" type="email" />
          </div>
          <div className="form_item">
            <input placeholder="Enter Your Phone Number" type="text" />
          </div>
          <div className="form_item">
            <input placeholder="Enter Password" type="password" />
          </div>

          <div className="button_back">
            <button>{" Register "}</button>
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
    transition: 0.4s;
    transform: translateY(-200%);
  }

  .open.active {
    transform: translateY(0%);
  }

  .auth_body {
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    border: 0.1px solid rgba(192,201,210,.5);
    transition: 0.4s;

    height: 500px;
    background-color: #fff;
    width: 500px;
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
          border: 1px solid rgba(192,201,210,.5);
          padding: 5px;
          width: 100%;
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
