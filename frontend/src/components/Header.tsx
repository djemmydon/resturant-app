import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Header({name, link}: {name:string, link: string}) {
  return (
      <Body>

          <div className="flex_body">
              <div className="text">
                  <h1>{ name}</h1>
              </div>

              <Link to={link}>
              <button>View More</button>
              </Link>
          </div>
          
    </Body>
  )
}

export default Header

const Body = styled.div`
   margin :2rem 0.8rem ;
   .flex_body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-bottom: 1px solid white;
    padding: 10px 0;

    a{
        font-weight: 500;

        button{
    background-color: rgba(0, 0, 0, 0.105);
    width: 130px;
    height: 40px;
    border-radius: 10px;
    transition: .5s;

        }
    }
   }

`