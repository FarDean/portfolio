import styles from "./../styles/Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLaptopHouse,
	faAddressCard,
	faScroll,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Nav = (): JSX.Element => {
	let path = useLocation().pathname;

	return (
		<div className={styles.nav}>
			<div className={path === "/" ? styles.active : ""}>
				<Link to="/">
					<FontAwesomeIcon icon={faLaptopHouse} />
					<div>Home</div>
				</Link>
			</div>
			<div className={path === "/about" ? styles.active : ""}>
				<Link to="/about">
					<FontAwesomeIcon icon={faAddressCard} /> <div> About</div>
				</Link>
			</div>
			<div className={path === "/works" ? styles.active : ""}>
				<Link to="/works">
					<FontAwesomeIcon icon={faScroll} />
					<div>Works</div>
				</Link>
			</div>

			<div className={path === "/contact" ? styles.active : ""}>
				<Link to="/contact">
					<FontAwesomeIcon icon={faEnvelope} />
					<div>Contact Me</div>
				</Link>
			</div>
		</div>
	);
};
