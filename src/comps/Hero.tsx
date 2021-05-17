import styles from "./../styles/Hero.module.css";

export const Hero = (): JSX.Element => {
	return (
		<div className={styles.parent}>
			<div className={styles.grid}>
				<div className={styles.div1}>F</div>
				<div className={styles.div2}>a</div>
				<div className={styles.div3}>r</div>
				<div className={styles.div4}>D</div>
				<div className={styles.div5}>e</div>
				<div className={styles.div6}>a</div>
				<div className={styles.div7}>n</div>
			</div>
			<div className={styles.bio}>
				<div>Hey, my name is Fardean,</div>
				<div> I'm a JavaScript enthusiast, </div>

				<div> and currently Code as a hobby!</div>
			</div>
			<div className={styles.social}>
				<div>
					<a target="_blank" rel="noreferrer" href="https://github.com/FarDean">
						<i className="fab fa-github"></i>
					</a>
				</div>
				{/* <div>
					<i className="fab fa-twitter"></i>
				</div> */}
			</div>
		</div>
	);
};
