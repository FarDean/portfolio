import styles from "./../../styles/utils/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
	message: string;
	open: boolean;
	resolved: boolean;
	name: string;
}

export const Modal: React.FC<Props> = ({ message, open, resolved, name }): JSX.Element => {
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
						Hey, <span>{name}</span> <br />
						{message}
					</h3>

					{resolved ? <Link to="/">OK</Link> : <Link to="/contact">Try again!</Link>}
				</div>
			</div>
		</div>
	);
};
