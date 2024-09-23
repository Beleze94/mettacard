"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function NameInput({
	label = "Nome Completo",
	placeholder = "Insira seu nome",
	name = "nome",
}) {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	function validateName(name) {
		const nameTrim = name.trim();
		const validRegex = /[^A-Za-zÀ-ÖØ-öø-ÿ\s]+/;
		if (nameTrim.length < 3) {
			return 1;
		}
		if (nameTrim.length > 32) {
			return 2;
		}
		if (validRegex.test(nameTrim)) {
			return 3;
		}
	}

	useEffect(() => {
		if (userInputParent.length == 0) {
			setState("default");
			setHelperText("");
			return;
		}
		switch (validateName(userInputParent)) {
			case 1:
				setState("error");
				setHelperText("Insira o nome completo");
				break;
			case 2:
				setState("error");
				setHelperText("Por favor, utilize abreviações");
				break;
			case 3:
				setState("error");
				setHelperText("Não utilize números ou caracteres especiais");
				break;
			default:
				setState("success");
				setHelperText("");
				break;
		}
	}, [userInputParent]);

	return (
		<>
			<Input
				state={state}
				name={name}
				type="text"
				placeholder={placeholder}
				label={label}
				helperText={helperText}
				onType={inputHandler}
			/>
		</>
	);
}
