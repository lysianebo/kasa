import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                    </NavLink>
             </ul>

             </div>

                        
    );
};


// import React from 'react';
// import "./Navbar.css";

// function Navbar() {
//     return
//      <nav className='navbar'></nav>
//      <div className='navbar__logo'>
//         <img src="logo.png" alt="Logo" />
//         <div>Accueil</div>
//         <div>A propos</div>
//      </div>
// };

 export default Navbar;