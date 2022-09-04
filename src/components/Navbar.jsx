import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {
	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
			<div className='container-fluid'>
				<NavLink to='/' className='navbar-brand'>
					GitHub search
				</NavLink>
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink exact='true' to='/' className='nav-link'>
								Main
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/about' className='nav-link'>
								Info
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
