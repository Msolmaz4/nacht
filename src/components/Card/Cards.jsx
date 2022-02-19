import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./cards.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cards = () => {
  const [sache, setSache] = useState([]);

  const FetchCard = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(res.data);
    setSache(res.data);
  };

  useEffect(() => {
    FetchCard();
  }, []);

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
                    <a href='#' > <AiOutlineShoppingCart
                   
                    className="zxc" /></a>
                  </div>

                  <Button className="button"  variant="primary">ADD</Button>
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
