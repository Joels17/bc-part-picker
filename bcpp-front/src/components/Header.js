import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div id="header" className="center">
				<h1>BC Part Picker</h1>
				<div id="headerText">
					<h3>Welcome to BC Part Picker where you're able to check part compatibility for all your needs whether you want to 
					build skis, skateboards, or anything else (in the near future) we have it all!</h3>
				</div>
			</div>
		);
	}
}
