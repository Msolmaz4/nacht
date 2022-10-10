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
                  height: "auto",
                  margin: "2rem",
                  padding: "1rem",
                }}
              >
                <Card.Img variant="top" src={e.image} className='imag'/>
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                 
                  <div className="zxc">
                    <Card.Text className="cxz"> {e.price}$</Card.Text>
                
                    < MdOutlineFavoriteBorder/>
                    <Link to={`details/${e.id}`}>a</Link>
                    <AiOutlineShoppingCart
                    className="zxc" />
                    
                     <AiOutlineShoppingCart
                    className="zxc" />
                   
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
