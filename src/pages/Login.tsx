import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Logins = {

  password: string,
  email: string
}

function Login() {
  const {
    register,
    handleSubmit,
    
  } = useForm<Logins>();

  const onSubmit = handleSubmit(
    (data) => {
      axios
        .post("https://commerce-backend-rho.vercel.app/auth/register", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
  return (
    <Body>
      <div className="form_body">
        <div className="header">
          <h2>Register</h2>
        </div>

        <form action="" onSubmit={onSubmit}>

          <div className="input_body">
            <label htmlFor="">Email</label>
            <input
              placeholder="e.g johndoe@gmail.com"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="input_body">
            <label htmlFor="">Password</label>
            <input
              placeholder="e.g MyPassword321"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="submit">
            <button type="submit">
              <p>Submit</p>
            </button>
          </div>
        </form>

        <div className="account">
          <p>
            Are you a new user? <Link to="/register">create a new account</Link>
          </p>
        </div>
      </div>
    </Body>
  );
}

export default Login;

const Body = styled.div`
  padding: 10rem 0;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-weight: 700;
  }

  .header {
    margin: 10px 0;
    font-size: 2rem;
  }
  .form_body {
    width: 500px;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
        width: 330px;
    }
  }
  form {
    width: 100%;
 

    display: flex;
    flex-direction: column;
    /* justify-items: center; */
    align-items: center;
    gap: 0.7rem;

    .input_body {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width:100%;

   
      input {
        border: 2px solid #f19b07a9;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        transition: 0.4s;
        padding: 0 9px;
        outline: none;

        :focus {
          border: 2px solid #ffbd4ba9;
        }
        :active {
          border: 2px solid #ffbd4ba9;
        }
      }
    }
    .submit {
      button {
        background-color: #ff7700;
        border-radius: 10px;
        width: 200px;
        height: 40px;
        color: white;
        font-size: 1.4rem;
        border: 1px solid #ff7700;
        position: relative;
        transition: 0.5s;

        p {
          z-index: 100;
          position: relative;
        }

        ::before {
          content: "";
          position: absolute;
          border-radius: 10px;

          width: 0%;
          height: 100%;
          background-color: white;
          top: 0;
          left: 0;
          transition: 0.5s;
        }

        :hover::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #ff7700;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .account {
    margin: 10.43px auto;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      color: #ff7700;
      transition: 0.4s;

      :hover{
        text-decoration: underline;
      }
    }
  }
`;
