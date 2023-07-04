import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://logospng.org/download/star-wars/star-wars-256.png"
					className="img-thumbnail"
					alt="..."
					style={{ width : "30%", height: "50%" }} 
					/>
				</span>
			</Link>
				<div className="dropdown ml-auto">
					<Link to="/demo">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul class="dropdown-menu"></ul>
					</Link>
				</div>
			</nav>
			</div>
		);
	};
