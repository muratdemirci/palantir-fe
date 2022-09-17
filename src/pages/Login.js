import React, { useState } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

function Login() {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [isLogin, setIsLogin] = useState(false);


  const handleValues = (e) => {
    e.preventDefault();
    console.log(e.target.elements.email.value)
  }

  return (
    <div>
        <Header />
        <div >
        <section class="bg-gray-900">
          <div class="flex flex-col items-center justify-center mt-8">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" onSubmit={handleValues}>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Mail</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <button type="submit" style={{backgroundColor:"#2663EB"}} class="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
        <Footer />
    </div>
  )
}

export default Login