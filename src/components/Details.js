import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div style={{margin:'40px'}}>
     urun:   {id}
    </div>
  )
}

export default Details