"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function TelInput({
	label = "Telefone / Celular",
	placeholder = "(XX) XXXXX-XXXX",
	name = "telefone",
}) {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	function validateTel(tel) {
		if ((tel.length === 10 || tel.length === 11) && !isNaN(tel)) {
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		if (userInputParent.length == 0) {
			setState("default");
			setHelperText("");
			return;
		}
		const isTel = validateTel(userInputParent);
		if (isTel) {
			setState("success");
			setHelperText("");
		} else {
			setState("error");
			setHelperText("Insira número válido");
		}
	}, [userInputParent]);

	return (
		<>
			<Input
				state={state}
				name={name}
				type="tel"
				placeholder={placeholder}
				label={label}
				helperText={helperText}
				maxLength={11}
				onType={inputHandler}
			/>
		</>
	);
}
