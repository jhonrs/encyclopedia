import React from "react";
import './App.css';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import { CardCategory } from "../../components/CardCategory/CardCategory";
import { Home } from "../Home/Home";

export const App = () => {



    return (
        <main>


            <Router>
                <nav className='navBar'>

                    <Link to="/home"> <a className='nav__options' href="">Home</a></Link>

                    <Link to="/about"><a className='nav__options' href="">About</a></Link>

                    <Link to="/search"><a className='nav__options' href="">Search</a></Link>

                </nav>
                <Route path='/home' render={()=><Home></Home>   }/>
            </Router>
        </main>
    );
}