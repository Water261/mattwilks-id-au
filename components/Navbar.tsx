"use client";

import { useState } from "react";

export function Navbar() {
	const [shouldShowNavbar, toggleNavbar] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<a href="/" className="navbar-item">
					<h1>Matthew Wilks</h1>
				</a>
				<a role="button" className={`navbar-burger ${shouldShowNavbar ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={() => toggleNavbar(!shouldShowNavbar)}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div id="navbarMenu" className={`navbar-menu ${shouldShowNavbar ? "is-active" : ""}`}>
				<div className="navbar-end">
					<a href="/about" className="navbar-item">About Me</a>
					<a href="/projects" className="navbar-item">My Projects</a>
					<a href="/contact" className="navbar-item">Contact Me</a>
				</div>
			</div>
		</nav>
	);
}