import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mainPage, partsPage } from '../slices/pageSlice';

function SearchCategory() {
	const [searchValue, setSearchValue] = useState('');
	const [jsonData, setJsonData] = useState([]);

	const page = useSelector((state) => state.page.value);
	const dispatch = useDispatch();

	const onChange = (e) => {
		setSearchValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		fetch('http://127.0.0.1:3000/parts')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setJsonData(json);
				dispatch(partsPage());
			});
	};

	return (
		<div id="searchcategory">
			<form method="get" id="searchcategoryForm" onSubmit={onSubmit}>
				<input onChange={onChange} type="text" placeholder="Search.." />
			</form>
			<button
				disabled={!searchValue}
				type="submit"
				form="searchcategoryForm"
				value="Submit"
			>
				Start Picking!
			</button>
			{jsonData ? jsonData.map((item) => <p key={item.id}>{item.name}</p>) : ''}
		</div>
	);
}

export default SearchCategory;
