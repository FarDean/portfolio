import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./comps/Home";
import { Nav } from "./comps/Nav";

function App() {
	return (
		<Router>
			<Nav />
			<Route path="/">
				<Home />
			</Route>
		</Router>
	);
}

export default App;
