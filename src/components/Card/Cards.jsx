import React from "react";

import { Card } from "react-bootstrap";
import "./cards.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const Cards = () => {

 const  {sache,filter} =useContext(AuthContext)


 //  {sache.map((e) => { once genel gormek icin sonra filter oxzelligi


  return (
    <React.Fragment>
      <div className="card-map">
        {sache.map((e) => {
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
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text> {e.description}</Card.Text>
                  <div className="zxc">
                    <Card.Text className="cxz"> {e.price}$</Card.Text>
                    < MdOutlineFavoriteBorder/>
                    <a href='#' > <AiOutlineShoppingCart
                   
                    className="zxc" /></a>
                   
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
