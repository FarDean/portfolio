import styles from "./../styles/ContactMe.module.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import { Spinner } from "./utils/Spinner";
import { Modal } from "./utils/Modal";

interface Inputs {
	name: string;
	email: string;
	message: string;
	recaptcha: string;
}

export const ContactMe: React.FC = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	const [resolved, setResolved] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors, isValid },
	} = useForm<Inputs>({
		mode: "onChange",
	});

	useEffect(() => {
		return () => {
			setOpen(false);
		};
	}, []);

	const onSubmit: SubmitHandler<Inputs> = (data, e) => {
		setLoading(true);
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID!,
				process.env.REACT_APP_TEMPLATE_ID!,
				e?.target,
				process.env.REACT_APP_USER_ID
			)
			.then(
				result => {
					setResolved(true);
					setMessage("Thanks for visiting my website, Have a nice day!");
					setOpen(true);
					setLoading(false);
				},
				error => {
					setResolved(false);
					setMessage("Sorry, your message wasn't sent!");
					setOpen(true);
					setLoading(false);
				}
			);
	};

	console.log(process.env.REACT_APP_SITE_KEY);

	return loading ? (
		<Spinner />
	) : (
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
						{...register("name", {
							required: true,
							minLength: "3",
							maxLength: "30",
						})}
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

				<Controller
					control={control}
					name="recaptcha"
					rules={{ required: true }}
					render={({ field: { onChange } }) => (
						<ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY!} onChange={onChange} />
					)}
				/>
				{errors.recaptcha && <h6>You need to complete the recaptcha!</h6>}

				<input disabled={!isValid || loading} type="submit" />
			</form>
			<Modal open={open} message={message} resolved={resolved} name={watch("name")} />
		</div>
	);
};
