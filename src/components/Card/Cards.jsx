import React from "react";

import { Card } from "react-bootstrap";
import "./cards.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";
import {Link} from 'react-router-dom'

const Cards = () => {

 const  {sache,filter} =useContext(AuthContext)


 //  {sache.map((e) => { once genel gormek icin sonra filter oxzelligi


  return (
    <React.Fragment>
      <div className="card-map">
        {sache.slice(0,12).map((e) => {
          return (
            <div>

              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  margin: "2rem",
                  padding: "1rem",
                }}
              >
                <Card.Img variant="top" src={e.image} className='imag'/>
                <Card.Body>
                  <Card.Title className="yaz">{e.title}</Card.Title>
                 
                 <div className="price">
                 <Card.Text className="fiya"> Price</Card.Text>
                    <Card.Text className="cxz"> {e.price}$</Card.Text>
                 </div>
                   
                
                   
                   
                

                 
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Cards;
