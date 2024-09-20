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
			<div className={`${styles.wrapper} ${styles[state]}`}>
				<div className={`${styles.input} `}>
					<label className={`${styles.label}`} htmlFor={name}>
						{label}
					</label>

					<input
						className={`${styles.inputField}`}
						type={type}
						name={name}
						id={name}
						placeholder={placeholder}
					/>
					<IconContext.Provider
						value={{ className: `${styles.icon}` }}
					>
						<FaFontAwesome icon="fa-solid fa-circle-info" />
					</IconContext.Provider>
				</div>
				<p className={`${styles.helperText}`}>{helperText}</p>
			</div>
		</>
	);
}
