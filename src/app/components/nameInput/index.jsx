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

	function validateFullName(name) {
		const nameTrim = name.trim();
		const validRegex = /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/;
		if (nameTrim.match(validRegex)) {
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
