import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContex'

const Details = () => {
    const {id} = useParams()
    const {sache} =useContext(AuthContext)
    console.log(sache)

    const elem = sache.find(er=>er.id == id)
    console.log(elem)
 
 

    
  return (
    <div className='deta'>

   <div className='sa'>
   <image src={elem.image}/>
   </div>
   <div className='so'>
    {elem.price}
   </div>
    </div>
  )
}

export default Details