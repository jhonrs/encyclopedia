import React from "react";
import { Link, Route, HashRouter as Router } from 'react-router-dom';

export const App = () => {
    return (
        <main>

<nav className='navBar'>

<Link to="/home"> <a className='nav__options' href="">Home</a></Link>

<Link to="/about"><a className='nav__options' href="">About</a></Link>

<Link to="/search"><a className='nav__options' href="">Search</a></Link>

</nav>
            <Router>
                <Route path='/home'></Route>
            </Router>
        </main>
    );
}