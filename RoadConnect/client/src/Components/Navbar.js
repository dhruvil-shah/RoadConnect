import React from 'react'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';
import { Home } from './Home';
import {Drive} from './Drive';
import {SignUp} from './SignUp';
import {Login} from './Login';
import {Show} from './Show';
export const Navbar = () => {
    return (
        <Router>
        <div className=' p-4 flex flex-row gap-6 shadow-xl shadow-black-200'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/drive'>Drive</NavLink>
            <NavLink to='/show'>Show</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/drive' element={<Drive/>}></Route>
                <Route exact path='/show' element={<Show/>}></Route>
                <Route exact path='/login' element={<Login/>}></Route>
                <Route exact path='/signup' element={<SignUp/>}></Route>
            </Routes>
        </Router>
    )
}
