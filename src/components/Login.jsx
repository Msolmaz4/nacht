
import './Login.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const naviga = useNavigate() 
  const [password,setPassword] =useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] =useState("alert alert-danger d-none")

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (email && password){
    naviga('/')
  }
  else{
    setPass("alert alert-danger")
  }
  
}
 

  return (
    <div className='login'>
      <div className='bild'>
      <img src="https://picsum.photos/800/800" alt='resim'/>
      </div>
      <div >
      <div className={pass} role="alert">
  A simple secondary alert—check it out!
</div>
        <h2 className='gehen' > Login</h2>
        <form className='loginform' onSubmit={handleSubmit}>
          <div className='label1'>
            <label for='email'className="form-label display-2">
              Email
            </label>
            <input 
            type='email'
            className="form-control"
            id='email'
          
            placeholder="enter your email adress..."
            onClick={(e)=>setEmail(e.target.value)}
            />
            <div>
              <label for='password' className='form-label display2'>
                Pasword
              </label>
              <input
              type='password'
      
              id='password'
              className='form-control'
              placeholder="enter your Password..."
              onClick={(e)=>setPassword(e.target.value)}

              />
              <div className='btnl'>
                <input 
                type='submit'
                value='LOGIN'
                className="btn btn-primary form-control"
                />
              </div>
              
            </div>


          </div>
       
  







        </form>

      </div>

    </div>
  )
}
