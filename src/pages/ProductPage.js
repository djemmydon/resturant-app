import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";

function ProductPage() {
  const [fetch, setFetch] = useState([])

  const options = {
    method: 'GET',
    url: 'https://commerce-backend-rho.vercel.app/api/v1/product',
  
  };                                                                                                                                                                                                                                                                                                                                                                                         
  useEffect(() => {
    const fetchApi = async () => {
      await axios.request(options).then(res => {
        setFetch(res.data)
      })
    }

    fetchApi()
  })

  return (
    <div className="h-full">
      <Products fetch={fetch} />
    </div>
  );
}

export default ProductPage;
