// import portrait from "././../assets/portrait.jpg";
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
					{/* <img loading="lazy" src={portrait} alt="Face" /> */}
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
					<p>
						quibusdam quis blanditiis impedit, distinctio est ad totam debitis
						voluptates! Deleniti facilis praesentium delectus?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione esse
						ut commodi magni iure modi. Optio fugiat deserunt ab assumenda asperiores?
						Similique alias tenetur velit autem, unde repudiandae cum natus. Temporibus,
						ipsam. Doloremque, culpa beatae. Ea, dolores exercitationem, culpa atque
						similique accusantium ipsam hic corrupti amet qui nobis cum aliquam
						inventore sunt vel eligendi eaque laudantium officiis quo soluta in
						doloremque illo eius aspernatur. Maiores!
					</p>
				</div>
			</div>
		</div>
	);
};
