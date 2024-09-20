"use client";

import React from "react";
import styles from "./input.module.css";
import { FaFontAwesome } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Input({
	state,
	name,
	type,
	placeholder,
	label,
	helperText,
}) {
	return (
		<>
			<div
				data-testid="wrapper"
				className={`${styles.wrapper} ${styles[state]}`}
			>
				<div data-testid="input" className={`${styles.input} `}>
					<label
						data-testid="label"
						className={`${styles.label}`}
						htmlFor={name}
					>
						{label}
					</label>

					<input
						data-testid="inputField"
						className={`${styles.inputField}`}
						type={type}
						name={name}
						id={name}
						placeholder={placeholder}
					/>
					<IconContext.Provider
						value={{ className: `${styles.icon}` }}
					>
						<FaFontAwesome
							data-testid="icon"
							icon="fa-solid fa-circle-info"
						/>
					</IconContext.Provider>
				</div>
				<p data-testid="helperText" className={`${styles.helperText}`}>
					{helperText}
				</p>
			</div>
		</>
	);
}
