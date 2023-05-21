import React from "react";

import { Card } from "react-bootstrap";
import "./cards.css";
import {MdFavorite} from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";
import {Link} from 'react-router-dom'
import { useState } from "react";


const Cards = () => {
  const [a, setA] = useState(0);
  const [ilk, setIlk] = useState(<MdFavoriteBorder/>);

  const handle7 = () => {
    if (a === 0) {
      setA(1);
      setIlk(< MdFavorite/>);
    }
    if (a === 1) {
      setA(0);
      setIlk(<MdFavoriteBorder />);
    }
  };





  

 const  {sache,filter} =useContext(AuthContext)


 //  {sache.map((e) => { once genel gormek icin sonra filter oxzelligi


  return (
    <React.Fragment>
      <div className="card-map">
        {sache.slice(0,12).map((e) => {
          return (
            <div key={e.id}>

              <Card
                style={{
                  width: "18rem",
                  height: "27rem",
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
              
                <div className="fav">
                  {ilk}
                  <Link to={`details/${e.id}`}>
                  <button className="detail" >DETAIL</button></Link>
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
