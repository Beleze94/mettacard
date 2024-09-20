"use client";

import styles from "./page.module.css";
import Button from "./components/button";
import Input from "./components/input";
import { useState } from "react";

export default function Home() {
	const state = "default";

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
					helperText="Helper Text"
				/>
				<Input
					state="error"
					name="TesteError"
					type="text"
					placeholder="Aqui contém um erro"
					label="Erro"
					helperText="Algo está errado"
				/>
				<Input
					state="success"
					name="TesteOkay"
					type="text"
					placeholder="Tudo okay"
					label="Verificado"
					helperText="Aqui está certo"
				/>
				<Button
					buttonVariant="filledDisable"
					buttonText="Botão"
				></Button>
			</main>
		</div>
	);
}
