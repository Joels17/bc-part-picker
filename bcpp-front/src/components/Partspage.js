import React from 'react';
import PartSelectorList from './PartSelectorList';
import PartList from './PartList';
import { useSelector, useDispatch } from 'react-redux';
import { mainPage, partsPage, setPartType } from '../slices/pageSlice';
import { deleteAll } from '../slices/cartSlice';
import Button from '@mui/material/Button';

function PartsPage() {
	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch(deleteAll());
		dispatch(setPartType('null'));
		dispatch(mainPage());
	};

	return (
		<div id="partpage">
			<div id="partPageTitle">
				<Button onClick={onClick} variant="contained">
					BACK
				</Button>
				<p>Parts page!!!</p>
			</div>
			<div id="flexthis" className="row">
				<div className="column">
					<PartSelectorList />
				</div>
				<div id="columnList" className="column">
					<PartList partType="Wheels" />
				</div>
			</div>
		</div>
	);
}

export default PartsPage;
