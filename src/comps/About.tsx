import portrait from "././../assets/portrait.jpg";

export const About: React.FC = (): JSX.Element => {
	return (
		<div>
			<div>
				<img src={portrait} alt="Face" />
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae modi
				sequi rem eos ipsam mollitia quia. Fuga quae nemo quas laboriosam inventore minima
				minus natus optio dignissimos autem dolores quibusdam quis blanditiis impedit,
				distinctio est ad totam debitis voluptates! Deleniti facilis praesentium delectus?
			</div>
		</div>
	);
};
