"use client";

import styles from "./page.module.css";
import Button from "./components/button";
import Input from "./components/input";
import { useState } from "react";

export default function Home() {
	const [state, setState] = useState("default");

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Button novoContato></Button>
				<Input
					state={state}
					name="Teste"
					type="text"
					placeholder="Seu nome aqui"
					label="Label"
				/>
				<Button
					buttonVariant="filledDisable"
					buttonText="Botão"
				></Button>
			</main>
		</div>
	);
}
