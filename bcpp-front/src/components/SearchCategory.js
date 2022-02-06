import React from 'react';

export default class SearchCategory extends React.Component {
	constructor() {
		super();
		this.state = { searchValue: '' };
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ searchValue: e.target.value });
	}

	render() {
		return (
			<div id="searchcategory">
				<form method="get" id="searchcategoryForm">
					<input onChange={this.onChange} type="text" placeholder="Search.." />
				</form>
				<button
					disabled={!this.state.searchValue}
					type="submit"
					form="searchcategoryForm"
					value="Submit"
				>
					Start Picking!
				</button>
			</div>
		);
	}
}
