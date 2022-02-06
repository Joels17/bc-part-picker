import Mainpage from './components/Mainpage';
import PartsPage from './components/Partspage';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const page = useSelector((state) => state.page.value);
	return (
		<div className="App">
			{page == 'mainpage' ? <PartsPage /> : <Mainpage />}
		</div>
	);
}

export default App;
