import React from 'react';
import Header from './Header';
import SearchCategory from './SearchCategory';
import Textbox from './Textbox';

export default class Mainpage extends React.Component {
	render() {
		return (
			<div id="header">
				<Header />
				<Textbox
					title="Start Picking"
					body="Choose a category to start picking!"
				/>
				<SearchCategory />
			</div>
		);
	}
}
