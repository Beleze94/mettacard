"use client";

import React from "react";
import styles from "./input.module.css";
import { FaFontAwesome } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Input() {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.input}`}>
					<label className={`${styles.label}`} htmlFor="inputMetta">
						Label
					</label>

					<input
						className={`${styles.inputField}`}
						type="text"
						name="inputMetta"
						placeholder="Placeholder"
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
