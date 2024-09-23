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

	function validateFullName(name) {
		var validRegex = /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/;
		if (name.match(validRegex)) {
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		if (userInputParent.length == 0) {
			return;
		}
		const isFullName = validateFullName(userInputParent);
		if (isFullName) {
			setState("success");
			setHelperText("");
		} else {
			setState("error");
			setHelperText("Insira o nome completo");
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
