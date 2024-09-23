"use client";

import React, { useEffect, useState } from "react";
import Input from "../input";

export default function CPFInput({
	name = "cpf",
	placeholder = "Insira seu CPF",
	label = "CPF",
}) {
	const [userInputParent, setUserInputParent] = useState("");
	const [state, setState] = useState("default");
	const [helperText, setHelperText] = useState("");

	const inputHandler = (userInput) => {
		setUserInputParent(userInput);
	};

	function validateCPF(cpf) {
		cpf = cpf.replace(/\D/g, "");

		if (cpf.length !== 11) {
			return false;
		}

		if (/^(\d)\1{10}$/.test(cpf)) {
			return false;
		}

		let soma = 0;
		for (let i = 0; i < 9; i++) {
			soma += parseInt(cpf.charAt(i)) * (10 - i);
		}
		let digito1 = 11 - (soma % 11);
		if (digito1 > 9) {
			digito1 = 0;
		}

		if (parseInt(cpf.charAt(9)) !== digito1) {
			return false;
		}

		soma = 0;
		for (let i = 0; i < 10; i++) {
			soma += parseInt(cpf.charAt(i)) * (11 - i);
		}
		let digito2 = 11 - (soma % 11);
		if (digito2 > 9) {
			digito2 = 0;
		}

		if (parseInt(cpf.charAt(10)) !== digito2) {
			return false;
		}

		return true;
	}

	useEffect(() => {
		if (userInputParent.length == 0) {
			return;
		}
		const isCPF = validateCPF(userInputParent);
		if (isCPF) {
			setState("success");
			setHelperText("");
		} else {
			setState("error");
			setHelperText("CPF inválido");
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
