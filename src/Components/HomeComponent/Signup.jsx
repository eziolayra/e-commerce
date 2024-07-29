import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="flex items-center h-screen justify-center text-white">
    <form className="border-2 border-gray-300 p-10 rounded-md back bg-green-600">
    <p className='text-xl font-bold mb-10 text-center'>SIGNUP</p>
    <div className='flex gap-5'>
        <div className="relative">
                <input id="firstname" name="firstname" type ="text" required
                className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
                autoComplete="off"
                placeholder="&nbsp;"/>
                <label for='firstname' 
                className="absolute left-1 py-1 top-1 cursor-text peer-focus:-top-6 transition-all peer-focus:text-black">
                FIRST NAME
                </label>
        </div>
        <div className="relative">
            <input id="lastname" name="lastname" type ="text" required
            className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
            autoComplete="off"
            placeholder="&nbsp;"/>
            <label for='lastname' className="absolute left-1 py-1 top-1 cursor-text peer-focus:-top-6 transition-all peer-focus:text-black">
            LAST NAME
            </label>
        </div>  
    </div>
      
      <div className="relative mt-12">
        <input id="email" name="email" type ="email" required
        className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
        autoComplete="off"
        placeholder="&nbsp;"/>
        <label for='email' className="absolute left-1 py-1 top-1 cursor-text peer-focus:-top-6 transition-all peer-focus:text-black">
          USERNAME
        </label>
      </div>
      <div className='flex gap-5'>
        <div className="relative mt-12">
            <input id="createpassword" name="createpassword" type ="password" required
            className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
            autoComplete="off"
            placeholder="&nbsp;"/>
            <label for='createpassword' className="absolute left-1 py-1 top-1 cursor-text  peer-focus:-top-6 transition-all peer-focus:text-black">
                CREATE PASSWORD
            </label>
        </div>
        <div className="relative mt-12">
            <input id="password" name="password" type ="password" required
            className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
            autoComplete="off"
            placeholder="&nbsp;"/>
            <label for='password' className="absolute left-1 py-1 top-1 cursor-text  peer-focus:-top-6 transition-all peer-focus:text-black">
            CONFIRM PASSWORD
            </label>
        </div>
      </div>
      <div className='flex gap-2 mt-5'>
        <input type='checkbox'/>
        <p className='text-sm text-black'>By Signing up I have agreed all the <span className='underline text-blue-800 cursor-pointer'>Terms & Conditions</span> </p>
      </div>
      <div className='text-center'>
        <button type ="submit" className="pl-6 pr-6 border-2  border-gray-300 p-2 rounded-md mt-12 hover:shadow-md">SIGNUP</button>
        <button type ="submit" className="pl-6 pr-6 border-2 border-gray-300 p-2 rounded-md mt-12 hover:shadow-md ml-6">CANCEL</button>
      </div>
    </form>
  </div>
  )
}

export default Signup