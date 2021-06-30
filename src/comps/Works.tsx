import styles from "./../styles/Works.module.css";
import football from "./../assets/football480.jpg";
import blog from "./../assets/mern-blog-480.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
					<div>
						<img src={blog} loading="lazy" alt="MERN Blog" />
						<div className={styles.content}>
							<div>
								<a
									aria-label="MERN Blog Github"
									target="_blank"
									rel="noreferrer"
									href="https://github.com/FarDean/MERN-Blog"
								>
									<FontAwesomeIcon icon={faGithub} />
								</a>
							</div>
							<div>
								<a
									aria-label="MERN Blog Github"
									target="_blank"
									rel="noreferrer"
									href="https://fardeanblog.herokuapp.com/"
								>
									<FontAwesomeIcon icon={faLink} />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.div2}>
					<div>
						<img src={football} loading="lazy" alt="Football App" />
						<div className={styles.content}>
							<div>
								<a
									aria-label="Football App Github "
									target="_blank"
									rel="noreferrer"
									href="https://github.com/FarDean/fantastic-fiesta"
								>
									<FontAwesomeIcon icon={faGithub} />
								</a>
							</div>
							<div>
								<a
									aria-label="MERN Blog Github"
									target="_blank"
									rel="noreferrer"
									href="https://fardean-football-app.netlify.app/"
								>
									<FontAwesomeIcon icon={faLink} />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <div className={styles.div3}> project3</div> */}
			</div>
		</div>
	);
};
