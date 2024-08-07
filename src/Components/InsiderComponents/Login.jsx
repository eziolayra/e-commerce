import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center h-screen justify-center text-white">
      <form className="border-2 border-gray-300 p-10 rounded-md bg-green-600">
        <p className='text-xl font-bold mb-10'>LOGIN</p>
        <div className="flex gap-5">
        <div className="relative">
            <input 
              id="email" 
              name="email" 
              type="text" 
              required
              className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
              autoComplete="off"
              placeholder=" "
            />
            <label 
              for='email' 
              className="absolute left-1 py-1 top-1 cursor-text transition-all peer-focus:-top-6 peer-focus:text-black peer-valid:-top-6 peer-valid:text-black"
            >
              USERNAME
            </label>
          </div>
          <div className="relative">
            <input 
              id="password" 
              name="password" 
              type="password" 
              required
              className="h-10 w-full border-b-2 bg-green-600 border-gray-300 text-gray-900 focus:outline-none focus:border-black transition-colors peer" 
              autoComplete="off"
              placeholder=" "
            />
            <label 
              for='password' 
              className="absolute left-1 py-1 top-1 cursor-text transition-all peer-focus:-top-6 peer-focus:text-black peer-valid:-top-6 peer-valid:text-black"
            >
              PASSWORD
            </label>
          </div>
        </div>
        <button type="submit" className="border-2 border-gray-300 p-2 rounded-md mt-12 hover:shadow-md block w-full mb-6">Login</button>
        <div className="flex justify-between">
          <div>
            <p>Don't have an account?</p>
            <Link to="/Signup" className="text-black underline hover:text-blue-800">Signup</Link>
          </div>
          <Link to="#" className="text-black underline hover:text-blue-800">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
