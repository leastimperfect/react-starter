import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className='pa3 bg-black-70 white fw4 flex'>
				<h1 className='f5 ma0 mr-auto'>Graph Hero</h1>

				<nav className='main-nav'>
					<Link to="/home">Home</Link>
					<Link to="/about">About</Link>
				</nav>

			</div>
		);
	}
}

export default Header;