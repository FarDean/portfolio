import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./comps/Home";
import { Nav } from "./comps/Nav";
import { Works } from "./comps/Works";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/works">
					<Works />
				</Route>
				<Route exact path="/about">
					<Home />
				</Route>
				<Route exact path="/contact">
					<Home />
				</Route>
				<Route path="*" render={(): JSX.Element => <h1>Not Found!</h1>} />
			</Switch>
		</Router>
	);
}

export default App;
