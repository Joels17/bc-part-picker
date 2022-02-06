import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mainPage, partsPage } from '../slices/pageSlice';
import { initItems } from '../slices/cartSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchCategory() {
	const [searchValue, setSearchValue] = useState('');
	const [searchError, setSearchError] = useState('');
	const page = useSelector((state) => state.page.value);
	const dispatch = useDispatch();

	const onChange = (e) => {
		setSearchValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		fetch(`http://127.0.0.1:3000/categoriesearch/${searchValue}`)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (json) {
					dispatch(initItems(json));
					dispatch(partsPage());
				} else {
					setSearchError(`${searchValue} is not a valid category`);
				}
			});
	};

	const onCustomButton = (e) => {
		alert(
			'Full customization of parts and compatibilities with inventory scanner'
		);
	};

	return (
		<div id="searchcategory" className="center">
			<form
				className="center"
				method="get"
				id="searchcategoryForm"
				onSubmit={onSubmit}
			>
				<TextField onChange={onChange} type="text" placeholder="Search.." />
			</form>
			{searchError ? <p>{searchError}</p> : ''}
			<Button
				className="formButs"
				id="searchcategoryButton"
				disabled={!searchValue}
				variant="contained"
				type="submit"
				form="searchcategoryForm"
				value="Submit"
			>
				Start Picking!
			</Button>
			<Button
				onClick={onCustomButton}
				id="customButton"
				className="formButs"
				variant="contained"
			>
				Custom
			</Button>
		</div>
	);
}

export default SearchCategory;
