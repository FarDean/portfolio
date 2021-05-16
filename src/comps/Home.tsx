import styles from "./../styles/Home.module.css";

export const Home = (): JSX.Element => {
	return (
		<div className={styles.overlay}>
			<div className={styles.nav}>
				<div className={styles.left}>FarDean</div>
				<div className={styles.right}>
					<div>Home</div>
					<div>Works</div>
				</div>
			</div>
		</div>
	);
};
