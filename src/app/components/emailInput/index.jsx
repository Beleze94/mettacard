"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function EmailInput() {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	function validateEmail(email) {
		var validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (email.match(validRegex)) {
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		const isEmail = validateEmail(userInputParent);
		isEmail ? setState("success") : setState("error");
	}, [userInputParent]);

	return (
		<>
			<Input
				state={state}
				name="email"
				type="email"
				placeholder="Insira seu e-mail"
				label="E-Mail"
				helperText={helperText}
				onType={inputHandler}
			/>
		</>
	);
}
