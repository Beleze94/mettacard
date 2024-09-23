"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function EmailInput({
	name = "email",
	placeholder = "Insira seu e-mail",
	label = "E-mail",
}) {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	function validateEmail(email) {
		var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (email.match(validRegex)) {
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		if (userInputParent.length == 0) {
			return;
		}
		const isEmail = validateEmail(userInputParent);
		if (isEmail) {
			setState("success");
			setHelperText("");
		} else {
			setState("error");
			setHelperText("Insira um e-mail válido");
		}
	}, [userInputParent]);

	return (
		<>
			<Input
				state={state}
				name={name}
				type="email"
				placeholder={placeholder}
				label={label}
				helperText={helperText}
				onType={inputHandler}
			/>
		</>
	);
}
