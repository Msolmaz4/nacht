import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContex'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Details = () => {
    const {id} = useParams()
    const {sache} =useContext(AuthContext)
    console.log('sa',sache)

    const elem = sache.find(er=>er.id == id)
    console.log(elem)
 
   //basket
const [basket,setBasket]= useState([])
const [total,setTotal] =useState()


const add =()=>{
 
  const dene = basket.find((otem)=>otem.id === sache.id)
  if(dene){
      //basket varsa
      dene.amount +=1
      setBasket([...basket.filter((it)=>it.id !== sache.id),{
          id:sache.id,
          title:sache.title, 
          price:sache.price,
          amount:dene.amount
      }])


  }else{
      setBasket([...basket,{
          id:sache.id,
          title:sache.title,
          price:sache.price,
          amount:1
      }])
  }
}

console.log(basket)
useEffect(()=>{

    const totn =basket.reduce((pre,basket)=> pre + (basket.amount*basket.price),0)
    setTotal(totn)

},[basket])

const resume=()=>{

    const dene =basket.find((it)=>it.id === sache.id)
    dene.amount -= 1
    if(dene.amount === 0){
        setBasket([...basket.filter((it)=>it.id !== sache.id)])
    }
    else{
        setBasket([...basket.filter((rt)=>rt.id !== sache.id),
        {
            id:sache.id,
            title:sache.title,
            price:sache.price,
            amount:dene.amount 

        }])
    }

}

    
  return (
    <div className='deta'>

   <div className='sa'>


    <img src={elem.image} alt="" className='detim'/>
    

   </div>
   <div className='so'>
    <div className='acor'>
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header className='der'>{elem.title}</Accordion.Header>
        <Accordion.Body>
          {elem.description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
   <div className='detailpri'>
 PRICE:  {elem.price}$
   </div>
 <div className='sele'>
 <Form.Select  aria-label="Default select example">
      <option>Color select menu</option>
      <option value="1">blue</option>
      <option value="2">red</option>
      <option value="3">white</option>
    </Form.Select>
 </div>
 <div className="mb-2">
 <Button variant="primary" onClick={()=>resume(id)}>Resume</Button>
 ..........
        <Button variant="primary" size="lg" onClick={()=>add(id)}>
          ADD
        </Button>
   </div>
   <div>
    <p>COUNTER</p>
   </div>
   {
    basket.map((it)=>(
        <div style={{display:'flex',justifyContent:'center'}}>
           
           <p>{it.amount}</p>
           <p>{it.price}</p>
      
            
        </div>


    ))
   }
   <div>PRICE {total}</div>
   </div>
    </div>
  )
}

export default Details