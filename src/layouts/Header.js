import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div style={{backgroundColor: "rgb(167, 146, 202)"}} className="text-purple-50 rounded-lg mx-5">
      <div class='text-xl flex justify-between m-5 p-3'>

        <Link to='/' className='flex delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear ml-10'>
          <button id="home-button">
            Palantir
          </button>
        </Link>

        <div>
          <Link to='/login' className='ml-10 delay-75 duration-75 transform hover:text-indigo-600 transition ease-linear'>
            <button>
              Sign in
            </button>
          </Link>

          <Link to='/register' className='border-solid rounded-md border-2 border-gray-100 border-y4	
            mx-10 delay-75 py-1.5 duration-75 transform hover:text-indigo-600 transition ease-linear' style={{hover:{color:"#d9cece"}}}>
            <button className='py-2.5 px-2'>
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header