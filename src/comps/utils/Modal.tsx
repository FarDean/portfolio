import styles from "./../../styles/utils/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

interface Props {
	message: string;
	open: boolean;
	resolved: boolean;
	name: string;
}

export const Modal: React.FC<Props> = ({ message, open, resolved, name }): JSX.Element => {
	const history = useHistory();

	return (
		<div className={`center ${styles.modal} ${open ? styles.open : ""}`}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1>
						{resolved ? (
							<FontAwesomeIcon icon={faCheckCircle} />
						) : (
							<FontAwesomeIcon icon={faTimesCircle} />
						)}
					</h1>
					<h3>
						Hey <span>{name}</span>, <br />
						{message}
					</h3>

					{resolved ? (
						<button onClick={() => history.push("/")}>OK</button>
					) : (
						<button onClick={() => history.go(0)}>Try again!</button>
					)}
				</div>
			</div>
		</div>
	);
};
