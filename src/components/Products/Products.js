import React, {useEffect, useState} from 'react'
import ProductChild from './ProductChild'
// import Shaw from "../../assets/shaw.png";
// import Shaws from "../../assets/kebab_PNG50.png";
import styled from "styled-components";
import axios from 'axios';



function Products() {
  const [fetch, setFetch] = useState([])

  const options = {
    method: 'GET',
    url: 'http://localhost:3001/api/v1/product',
  
  };                                                                                                                                                                                                                                                                                                                                                                                         
  useEffect(() => {
    const fetchApi = async () => {
      await axios.request(options).then(res => {
        setFetch(res.data)
      })
    }

    fetchApi()
  })



  console.log(fetch)
  return (
    <Body>
      {fetch?.map((item) => (
        <ProductChild item={item}  />

      ))}
      
    </Body>
  )
}

export default Products

const Body = styled.div`
padding: 3rem 0;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
align-content:center;
justify-items: center;
gap: 0.5rem;

@media screen and (max-width:700px) {
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
}
@media screen and (max-width:500px) {
grid-template-columns: repeat(auto-fit, minmax(1r, 1fr));
  
}

`


