import styles from "./../styles/Hero.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero: React.FC = (): JSX.Element => {
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
				<div>I'm a React Developer {"&"} JavaScript/TypeScript enthusiast,</div>
				<div>I Code as a hobby!</div>
			</div>
			<div className={styles.social}>
				<div>
					<a
						aria-label="Github Profile"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/FarDean"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				{/* <div>
					<i className="fab fa-twitter"></i>
				</div> */}
			</div>
		</div>
	);
};
