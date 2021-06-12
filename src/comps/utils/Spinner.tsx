import styles from "./../../styles/utils/Spinner.module.css";

export const Spinner: React.FC = (): JSX.Element => {
	return (
		<div className={styles.center}>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
		</div>
	);
};
