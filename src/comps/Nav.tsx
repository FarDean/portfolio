import styles from "./../styles/Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = (): JSX.Element => {
	return (
		<div className={styles.nav}>
			<div className={styles.active}>
				<Link to="/">
					<i className="fas fa-laptop-house"></i> Home
				</Link>
			</div>
			<div>
				<Link to="/about">
					<i className="far fa-address-card"></i> About
				</Link>
			</div>
			<div>
				<Link to="/works">
					<i className="fas fa-scroll"></i> Works
				</Link>
			</div>

			<div>
				<Link to="/contact">
					<i className="far fa-envelope"></i> Contact Me
				</Link>
			</div>
		</div>
	);
};
