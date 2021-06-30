import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./comps/About";
import { ContactMe } from "./comps/ContactMe";
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
				<Route path="/works">
					<Works />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<ContactMe />
				</Route>
				<Route path="*" render={(): JSX.Element => <h1>Not Found!</h1>} />
			</Switch>
		</Router>
	);
}

export default App;
