import styles from "./../styles/Works.module.css";

export const Works = (): JSX.Element => {
	return (
		<div>
			<div className={styles.parent}>
				<div className={styles.div1}>
					<div className={styles.cardcontent}>
						<h3>MERN Blog</h3>
						<div>
							<div>Details</div>
							<div>github</div>
							<div>Link</div>
						</div>
					</div>
				</div>
				<div className={styles.div2}>
					<div className={styles.cardcontent}>
						<h3>MERN Blog</h3>
						<div>
							<div>Details</div>
							<div>github</div>
							<div>Link</div>
						</div>
					</div>
				</div>
				<div className={styles.div3}>
					<div className={styles.cardcontent}>
						<h3>MERN Blog</h3>
						<div>
							<div>Details</div>
							<div>github</div>
							<div>Link</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
