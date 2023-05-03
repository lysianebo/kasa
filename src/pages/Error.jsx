import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/pages/_errorPage.scss";

export default function ErrorPage() {
	return (
		<div>
			  <Header />
			  <div className='container_error'>
				<h1>404</h1>
				<h2>Oups! La page que <span>&nbsp;vous demandez n'existe pas.</span></h2>
				<a className='container_error' href="/">Retourner sur la page d’accueil </a>
			  </div>
			  <Footer />
		</div>
		
	);
}