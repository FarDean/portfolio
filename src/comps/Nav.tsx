import styles from "./../styles/Nav.module.css";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

export const Nav = (): JSX.Element => {
	let route = useRouteMatch();
	let location = useLocation();
	let path = useLocation().pathname;

	console.log(location, route);

	return (
		<div className={styles.nav}>
			<div className={path === "/" ? styles.active : ""}>
				<Link to="/">
					<i className="fas fa-laptop-house"></i>
					<div>Home</div>
				</Link>
			</div>
			<div className={path === "/about" ? styles.active : ""}>
				<Link to="/about">
					<i className="far fa-address-card"></i> <div> About</div>
				</Link>
			</div>
			<div className={path === "/works" ? styles.active : ""}>
				<Link to="/works">
					<i className="fas fa-scroll"></i>
					<div>Works</div>
				</Link>
			</div>

			<div className={path === "/contact" ? styles.active : ""}>
				<Link to="/contact">
					<i className="far fa-envelope"></i>
					<div>Contact Me</div>
				</Link>
			</div>
		</div>
	);
};
