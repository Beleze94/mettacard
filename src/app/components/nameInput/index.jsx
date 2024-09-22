"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function NameInput() {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	useEffect(() => {
		if (userInputParent.length == 0) {
			return;
		}
		if (userInputParent.length > 3) {
			setState("success");
			setHelperText("");
		} else {
			setState("error");
			setHelperText("Insira seu nome");
		}
	}, [userInputParent]);

	return (
		<>
			<Input
				state={state}
				name="nome"
				type="text"
				placeholder="Seu nome aqui"
				label="Nome"
				helperText={helperText}
				onType={inputHandler}
			/>
		</>
	);
}
