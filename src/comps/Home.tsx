import styles from "./../styles/Home.module.css";
import { Hero } from "./Hero";

export const Home = (): JSX.Element => {
	return (
		<div className={styles.overlay}>
			<div className={styles.nav}>
				<div className={styles.right}>
					<div>
						{" "}
						<i className="fas fa-laptop-house"></i> Home
					</div>
					<div>
						<i className="fas fa-scroll"></i> Works
					</div>
					<div>
						<i className="fab fa-github"></i> Github
					</div>
					<div>
						<i className="fab fa-twitter"></i> Twitter
					</div>
				</div>
				<Hero />
			</div>
		</div>
	);
};
