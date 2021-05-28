export const ContactMe: React.FC = (): JSX.Element => {
	return (
		<div>
			<form>
				<input type="text" name="name" id="name" />
				<input type="email" />
				<textarea name="message" id="" cols={30} rows={10}></textarea>
				<input type="submit" />
			</form>
		</div>
	);
};
