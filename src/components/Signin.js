import React from 'react'
import '../components/Signin.css'

export default function Signin() {
  return (
    <div className='h-[100vh] w-[100-vw] flex items-center justify-center'>
          <form className="form "> {/* border-2 border-white p-4 rounded-md */}
              <span className="input-span">
                  <label htmlFor="email" className="label">Email</label>
                  <input type="email" name="email" id="email"
                  /></span>
              <span className="input-span">
                  <label htmlFor="password" className="label">Password</label>
                  <input type="password" name="password" id="password"
                  /></span>
              <span className="span"><a href="#">Forgot password?</a></span>
              <input className="submit text-center" type="submit" value="Log in" />
              {/* <span className="span">Don't have an account? <a href="#">Sign up</a></span> */}
          </form>

    </div>
  )
}
