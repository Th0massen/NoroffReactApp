import React from 'react';
import { NavLink } from 'react-router-dom'
import './Layout.css';
import Header from '../../Header.jpg'

const layout = props => (
	<React.Fragment>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink to="/" className="nav-link nav-brand">Rick & Morty</NavLink>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">Characters</NavLink>
					<NavLink to="/location" className="nav-link">Locations</NavLink>
				</li>
			</ul>
		</nav>
		<header>
			<img src={ Header } 
			style={{
				width: '100%',
				height: '350px',
				display: 'block',
				marginBottom: '15px',
				borderBottom: '1px solid black'
			}}
			alt="Header"
			/>
		</header>
		<div className="container">
			{props.children}
		</div>
	</React.Fragment>
)


export default layout;