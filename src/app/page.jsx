"use client";

import styles from "./page.module.css";
import Button from "./components/button";
import NameInput from "./components/nameInput";
import EmailInput from "./components/emailInput";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Button novoContato></Button>
				<NameInput />
				<EmailInput />
				<Button
					buttonVariant="filledDisable"
					buttonText="Botão"
				></Button>
			</main>
		</div>
	);
}
