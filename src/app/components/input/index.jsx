"use client";

import React from "react";
import styles from "./input.module.css";
import { FaFontAwesome } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Input({ state, name, type, placeholder, label }) {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.input} ${styles[state]}`}>
					<label className={`${styles.label}`} htmlFor="inputMetta">
						{label}
					</label>

					<input
						className={`${styles.inputField}`}
						type={type}
						name={name}
						placeholder={placeholder}
					/>
					<IconContext.Provider
						value={{ className: `${styles.icon}` }}
					>
						<FaFontAwesome icon="fa-solid fa-circle-info" />
					</IconContext.Provider>
				</div>
				<p className={`${styles.helperText}`}>Helper Text.</p>
			</div>
		</>
	);
}
