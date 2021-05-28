import styles from "./../styles/ContactMe.module.css";

export const ContactMe: React.FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.hr}>
				<div></div>
				<h3>Contact Me</h3>
				<div></div>
			</div>
			<form className={styles.form}>
				<div>
					<label htmlFor="name">Name</label>
				</div>
				<div>
					<input type="text" name="name" id="name" />
					<h6>You need to fill in your name!</h6>
				</div>
				<div>
					<label htmlFor="email">Email</label>
				</div>
				<div>
					<input type="email" />
					<h6>You need to fill in your Email!</h6>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
				</div>
				<div>
					<textarea name="message" id="" cols={30} rows={10}></textarea>
					<h6>You message should be at least 20 charachters!</h6>
				</div>
				<input type="submit" />
			</form>
		</div>
	);
};
