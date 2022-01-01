import {React,useState} from 'react'

export const SignUp = () => {
  const [values,setValues] =useState({
    username:"",
    phone:"",
    aadhar:"",
    password:""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const Signupme=()=>{
    //Post Request
  };
    return (
      <div class="w-1/2 mt-20 mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method='POST'>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username" >
            Username
          </label>
          <input value={values.username} onChange={handleInputChange} name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone No
          </label>
          <input value={values.phone} onChange={handleInputChange} name='phone' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone No"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Aadhar Card No">
            Aadhar Card
          </label>
          <input value={values.aadhar} onChange={handleInputChange} name='aadhar' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Aadhar Card No." maxLength={12}/>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input value={values.password} onChange={handleInputChange} name='password' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
         </div>
        <div class="flex items-center flex flex-row gap-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>{Signupme()}}>
            Sign Up
          </button>
          <p className=' justify-end ml-20 mt-3 text-gray-500 text-xs'>Don't Have an account? Make it One</p>
    <a href='/login'><button className="bg-gray-500 hover:bg-black mt-2 text-sm text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button"  >
        Log In
      </button></a>
          
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
      
    </div>
    
    )
}
