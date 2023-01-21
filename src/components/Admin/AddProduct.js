import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { url } from "inspector";

function AddProduct() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);


  const ref = useRef()

  const file = ref.current
  
  
  useEffect(() => {
  
  }, [])
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const header = {
    "Content-Type": "application/json",
  };
  const onSubmit = async (data) => {
    axios.post("http://localhost:3001/auth/register", data).then((res) => {
      console.log(res.data);
    });

    // axios.post("http://localhost:3001/createProduct",
    // {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({
    //     name,
    //     slug,
    //     price,
    //     category,
    //   }),
    // }).then((res) => {
    //     res.json()
    // });
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* <label>Product Name</label> */}
            <input
              placeholder="firstName"
              className=" border w-[300px] h-10 border-black"
              {...register("firstName", { required: true })}
            />
            <input
              placeholder="lastName"
              className=" border w-[300px] h-10 border-black"
              {...register("lastName", { required: true })}
            />
            <input
              placeholder="email"
              type="email"
              className=" border w-[300px] h-10 border-black"
              {...register("email", { required: true })}
            />
            <input
              placeholder="password"
              type="password"
              className=" border w-[300px] h-10 border-black"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            {/* <input
              placeholder="picturePath"
              type="file"
              className=" border w-[300px] h-10 border-black"
              name="picturePath"
              {...register("picturePath", { required: false })}
            /> */}
          </div>
          <div>
         

         
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
