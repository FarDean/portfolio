import styles from "./../styles/ContactMe.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
	name: string;
	email: string;
	message: string;
}

export const ContactMe: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data, e) => console.log(e);

	return (
		<div className={styles.container}>
			<div className={styles.hr}>
				<div></div>
				<h3>Contact Me</h3>
				<div></div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div>
					<label htmlFor="name">Name</label>
				</div>
				<div>
					<input
						{...register("name", { required: true, minLength: "3", maxLength: "30" })}
						type="text"
						name="name"
						id="name"
					/>

					{errors.name && <h6>Name must be at least 3 and maximum 30 charachters!</h6>}
				</div>
				<div>
					<label htmlFor="email">Email</label>
				</div>
				<div>
					<input
						{...register("email", {
							required: true,
							pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
						})}
						type="email"
					/>
					{errors.email?.type === "required" && <h6>You need to fill in your Email!</h6>}
					{errors.email?.type === "pattern" && <h6>Please use a valid Email!</h6>}
				</div>
				<div>
					<label htmlFor="message">Message:</label>
				</div>
				<div>
					<textarea
						{...register("message", {
							required: true,
							minLength: "20",
							maxLength: "300",
						})}
						spellCheck
						name="message"
						id=""
						cols={30}
						rows={10}
					></textarea>
					{errors.message && (
						<h6>Your message should be at least 20 and maximum 300 charachters!</h6>
					)}
				</div>
				<input type="submit" />
			</form>
		</div>
	);
};
