import React from 'react';

export default class Textbox extends React.Component {
	render() {
		return (
			<div id="textbox">
				<h2>{this.props.title}</h2>
				<p>{this.props.body}</p>
			</div>
		);
	}
}
