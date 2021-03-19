import React from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
	return (
		<header>
			<div className="header-content">
				<div className="header-logo">
					<h2><Link exact to="/">Hidž</Link></h2>
					<h2 className="zama"><Link exact to="/">ama</Link></h2>
					<h2 className="began"><Link exact to="/">Began</Link></h2>
					<Link exact to="/"><div class="cupping-icon-logo" /></Link>
				</div>
				<nav>
					<li>
						<NavLink
							exact
							className="nav-StavIslama nav-linkovi"
							activeClassName="nav-linkovi-active"
							to="/stav-islama"
						>
							Stav islama
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							className="nav-cjenovnik nav-linkovi"
							activeClassName="nav-linkovi-active"
							to="/cjenovnik"
						>
							Cjenovnik
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							className="nav-kontakt nav-linkovi"
							activeClassName="nav-linkovi-active"
							to="/kontakt"
						>
							Kontakt
						</NavLink>
					</li>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
