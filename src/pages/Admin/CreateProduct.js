import axios from "axios";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  console.log(image);

  const handleImageChange = (file) => {
    const reader = (readFile) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result) => setImage({ name: file?.name, url: result }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const items = {
      image: image.url,
      title,
      color,
      price,
      description,
    };

    setLoading(true);

    await axios

      .post("hhttps://commerce-backend-rho.vercel.app/api/v1/product", items, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        try {
          if (res.status) {
            setLoading(false);
          }
        } catch (error) {
          console.log(res.status.message);
        }
      });
  };
  return (
    <Body>
      <div className="form_body" encType="multipart/form-data">
        <div className="header">
          <h2>Create A Product</h2>
        </div>

        <form action="" onSubmit={onSubmit}>
          <div className="input_body">
            <label htmlFor="">Product Name</label>
            <input
              placeholder="e.g T-shirt"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input_body">
            <label htmlFor="">Description</label>
            <input
              placeholder="product description..."
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="input_body">
            <label htmlFor="">Price</label>
            <input
              placeholder="e.g Emeka"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input_body">
            <label htmlFor="">Color</label>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="color"
            />
          </div>
          <div className="input_body">
            <label htmlFor="">Product Image</label>
            <input
              placeholder="e.g johndoe@gmail.com"
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e.target.files[0])}
            />
          </div>

          <div className="submit">
            <button type="submit">
              <p>
                {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
              </p>
            </button>
          </div>
        </form>
      </div>
    </Body>
  );
}

export default CreateProduct;

const Body = styled.div`
  padding: 10rem 0;
  width: 100%;

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
      width: 100%;

      label {
        font-family: "Montserrat", sans-serif;
      }

      input {
        border: 1px solid rgba(192, 201, 210, 0.5);
        font-family: "Montserrat", sans-serif;

        width: 100%;
        height: 40px;
        transition: 0.4s;
        padding: 5px 9px;
        outline: none;

        :focus {
          border: 1px solid #ed1d24;
        }
        :active {
          border: 1px solid #ed1d24;
        }
      }
    }
    .submit {
      button {
        background-color: #ed1d24;
        width: 200px;
        height: 40px;
        color: white;
        font-size: 1.4rem;
        position: relative;
        transition: 0.5s;

        p {
          z-index: 100;
          position: relative;
        }

        ::before {
          content: "";
          position: absolute;

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
          background-color: #ed1d24;
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

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
