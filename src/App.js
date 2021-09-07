import logo from './logo.svg';

function App() {
	return (
		<div className="tc bg-black-80 h-100 flex flex-column items-center justify-center f4 white">
			<img src={logo} className="w-30 mb4" alt="logo"/>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a className="App-link" href="https://github.com/leastimperfect/react-starter" target="_blank">
				GitHub: <code>leastimperfect/react-starter</code>
			</a>
		</div>
	);
}

export default App;
