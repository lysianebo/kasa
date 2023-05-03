import logo from "../assets/images/logo.svg";
//import logo1 from "../assets/images/logo1.svg";
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom";
import '../styles/layout/_header.scss';

export default function Header() {
	return (
		
		<header className="header__logo__navigation">
			<NavLink to="/">
				<figure className="navbar__logo">
					<img className="logo" src={logo} alt="logo de kasa" />
				</figure>
			</NavLink>
			<Navbar className="navigation" />
		</header>

	);
}