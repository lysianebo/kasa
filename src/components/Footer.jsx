import React from 'react';
import '../styles/layout/_footer.scss'
import logo from "../assets/images/logo9.svg";

const Footer = () => {
    return (
        <div className='footer'>
       <figure className="navbar__logo">
				<img className="logo" src={logo} alt="logo de kasa" />
			</figure>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;