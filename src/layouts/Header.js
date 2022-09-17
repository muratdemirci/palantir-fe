import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{ backgroundColor: "#295647", color: "#d9cece" }}>
      <div class='text-xl flex justify-between' >

        <Link to='/' className='flex delay-75 duration-75 transform hover:text-gray-400 transition ease-linear ml-10'>
          <button>
            Palantir
          </button>
        </Link>

        <div>
          <Link to='/login' className='ml-10 delay-75 duration-75 transform hover:text-gray-400 transition ease-linear'>
            <button>
              Sign in
            </button>
          </Link>

          <Link to='/register' className='border-solid rounded-md border-2 border-gray-100 border-y4	
            mx-10 delay-75 py-1.5 duration-75 transform hover:text-gray-400 transition ease-linear' style={{hover:{color:"#d9cece"}}}>
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