"use client";

import styles from "./input.module.css";
import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

export default function Input({
	state,
	name,
	type,
	placeholder,
	label,
	helperText,
	onType,
}) {
	if (state == "success") {
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
							onChange={(e) => onType(e.target.value)}
						/>

						<IconContext.Provider
							value={{ className: `${styles.icon}` }}
						>
							<FaCircleCheck />
						</IconContext.Provider>
					</div>
					<p
						data-testid="helperText"
						className={`${styles.helperText}`}
					>
						{helperText}
					</p>
				</div>
			</>
		);
	} else {
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
							onChange={(e) => onType(e.target.value)}
						/>

						<IconContext.Provider
							value={{ className: `${styles.icon}` }}
						>
							<FaInfoCircle />
						</IconContext.Provider>
					</div>
					<p
						data-testid="helperText"
						className={`${styles.helperText}`}
					>
						{helperText}
					</p>
				</div>
			</>
		);
	}
}
