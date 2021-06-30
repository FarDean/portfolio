import portrait from "././../assets/portrait.jpg";
import styles from "./../styles/About.module.css";

export const About: React.FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.hr}>
				<div></div>
				<h3>About Me</h3>
				<div></div>
			</div>
			<div className={styles.about}>
				<div className={styles.img}>
					<img loading="lazy" src={portrait} alt="Face" />
				</div>
				<div className={styles.p}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
						repudiandae modi sequi rem eos ipsam mollitia quia. Fuga quae nemo quas
						laboriosam inventore minima minus natus optio dignissimos autem dolores
					</p>
					<p>
						quibusdam quis blanditiis impedit, distinctio est ad totam debitis
						voluptates! Deleniti facilis praesentium delectus?
					</p>
				</div>
			</div>
		</div>
	);
};
