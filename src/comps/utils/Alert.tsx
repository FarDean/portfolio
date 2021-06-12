import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
	name: string;
	result: "success" | "fail";
}

export const Alert: React.FC<Props> = ({ name, result }): JSX.Element => {
	return (
		<div>
			{result === "success" && (
				<div>
					<FontAwesomeIcon icon={faCheckCircle} />
					<h2>Thanks for coming by {name}</h2>
					<h2>I'll get back to you ASAP!</h2>
					<h3>Have a nice day.</h3>
				</div>
			)}
			{result === "fail" && (
				<div>
					<FontAwesomeIcon icon={faTimesCircle} />
					<h2>Sorry {name}</h2>
					<h2>Somethin went wrong</h2>
				</div>
			)}
		</div>
	);
};
