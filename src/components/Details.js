import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContex'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


const Details = () => {
    const {id} = useParams()
    const {sache} =useContext(AuthContext)
    console.log(sache)

    const elem = sache.find(er=>er.id == id)
    console.log(elem)
 
 

    
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

   <Form.Select className='mb-2' aria-label="Default select example">
      <option>Color select menu</option>
      <option value="1">blue</option>
      <option value="2">red</option>
      <option value="3">white</option>
    </Form.Select>
   
   
   </div>
    </div>
  )
}

export default Details