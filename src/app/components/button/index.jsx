"use client";
import styles from "./button.module.sass";

export default function Button({ buttonText }) {
	return (
		<>
			<a className={`${styles.button}`}>{buttonText}</a>
		</>
	);
}
