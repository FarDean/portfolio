import styles from "./../styles/ContactMe.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

interface Inputs {
	name: string;
	email: string;
	message: string;
}

export const ContactMe: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({
		mode: "onTouched",
	});

	console.log(isValid);

	const onSubmit: SubmitHandler<Inputs> = (data, e) => {
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID!,
				process.env.REACT_APP_TEMPLATE_ID!,
				e?.target,
				process.env.REACT_APP_USER_ID
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

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
						name="email"
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
				<input disabled={!isValid} type="submit" />
			</form>
		</div>
	);
};
