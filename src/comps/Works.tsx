import styles from "./../styles/Works.module.css";
import football from "./../assets/football480.jpg";
import blog from "./../assets/mern-blog-480.jpg";

export const Works = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.hr}>
				<div></div>
				<h3>My Projects</h3>
				<div></div>
			</div>
			<div className={styles.parent}>
				<div className={styles.div1}>
					<img src={blog} loading="lazy" alt="MERN Blog" />
				</div>
				<div className={styles.div2}>
					<img src={football} loading="lazy" alt="Football App" />
				</div>
				{/* <div className={styles.div3}> project3</div> */}
			</div>
		</div>
	);
};
