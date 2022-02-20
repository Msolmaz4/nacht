
import './register.css'

import React from 'react'
export default function Login() {
 
 

  return (
    <div className='login'>
      <div className='bild'>
      <img src="https://picsum.photos/800/800" alt='resim'/>
      </div>
      <div >
     
        <h2 className='gehen' > REGISTER</h2>
        <form className='loginform' >
          <div className='label1'>
            <label for='first-name'className="form-label display-2">First Name</label>
            <input 
            type='text'
            className="form-control"
            id='first'
          
            placeholder="enter your Name"
            //onClick={(e)=>setEmail(e.target.value)}
            />
            <div>
            <label for='last-name'className="form-label display-2">Last Name</label>
            <input 
            type='text'
            className="form-control"
            id='last'
          
            placeholder="enter Last Name"
            //onClick={(e)=>setEmail(e.target.value)}
            />
            <label for='last-name'className="form-label display-2">emaıl</label>
            <input 
            type='email'
            className="form-control"
            id='email'
          
            placeholder="enter Email"
            //onClick={(e)=>setEmail(e.target.value)}
            />
<label for='password'className="form-label display-2">Password</label>
            <input 
            type='password'
            className="form-control"
            id='password'
          
            placeholder="password"
            //onClick={(e)=>setEmail(e.target.value)}
            />


              <div className='btnl'>
                <input 
                type='submit'
                value='register'
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
