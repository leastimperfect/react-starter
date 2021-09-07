import {BrowserRouter} from "react-router-dom";

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

function App() {
	return <>
		<BrowserRouter>
			<Header/>
			<Routes/>
		</BrowserRouter>
	</>;
}

export default App;
