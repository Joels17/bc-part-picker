import React from 'react';
import Header from './Header';
import SearchCategory from './SearchCategory';
import Textbox from './Textbox';

export default class Mainpage extends React.Component {
	render() {
		return (
			<div id="mainpage">
				<Header />
				<div className="startPicking">
					<Textbox
						title="Start Picking"
						//body="Choose a category to start picking!"
						body="We'll help you figure out which parts are compatible by comparing them with the help of our extensive database. 
					All you have to do is select what you want to build from what we have available (skateboards and skis at the moment),
					then you're free to select which parts you'd like to use and we'll do all the background checking to see if 
					they are compatible. With this tool the possibilities are endless and you're able to walk away with a 
					list of the parts that build a pretty neat pair of skis."
					/>
				</div>
				<SearchCategory />
			</div>
		);
	}
}
