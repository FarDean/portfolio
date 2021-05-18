import styles from "./../styles/Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = (): JSX.Element => {
	return (
		<div className={styles.nav}>
			<div className={styles.active}>
				<Link to="/">
					<i className="fas fa-laptop-house"></i>
					<div>Home</div>
				</Link>
			</div>
			<div>
				<Link to="/about">
					<i className="far fa-address-card"></i> <div> About</div>
				</Link>
			</div>
			<div>
				<Link to="/works">
					<i className="fas fa-scroll"></i>
					<div>Works</div>
				</Link>
			</div>

			<div>
				<Link to="/contact">
					<i className="far fa-envelope"></i>
					<div>Contact Me</div>
				</Link>
			</div>
		</div>
	);
};
