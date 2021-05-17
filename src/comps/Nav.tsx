import styles from "./../styles/Nav.module.css";
export const Nav = (): JSX.Element => {
	return (
		<div className={styles.nav}>
			<div className={styles.active}>
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
	);
};
