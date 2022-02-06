import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
				<div id="searchcategoryForm">
					<form method="get" id="searchcategoryForm">
						<TextField onChange={this.onChange} type="text" placeholder="Search.." />
					</form>
				</div>
				<div id="searchcategoryButton">
					<Button
						disabled={!this.state.searchValue}
						variant="contained"
						type="submit"
						form="searchcategoryForm"
						value="Submit"
					>
						Start Picking!
					</Button>
				</div>
			</div>
		);
	}
}
