import {React,useState} from 'react'

export const Login = () => {
    const [values,setValues] =useState({
      phone:"",
      password:""
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
    const Loginupme=()=>{
      //Post Request
    };
    return (
<div className="w-full max-w-xs mt-20 mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
        Phone
      </label>
      <input name='phone' value={values.phone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone No"/>
    </div>
    <div className="mb-6">
      <label name='password' value={values.password} onChange={handleInputChange} className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Loginupme}>
        Log In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    <p className='mt-3 text-gray-500 text-xs'>Don't Have an account? Make it One</p>
    <a href='/signup'><button className="bg-gray-500 hover:bg-black mt-2 text-sm text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button" >
        Sign Up
      </button></a>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

    )
}
