"use client";
import React from "react";
import styles from "./button.module.css";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Button({
	href,
	buttonText,
	buttonVariant,
	novoContato,
}) {
	if (novoContato) {
		return (
			<>
				<a
					data-testid="button"
					href={href}
					className={`${styles.button} ${styles.novoContato}`}
				>
					<IconContext.Provider
						value={{ className: `${styles.icon}` }}
					>
						<FaPlus />
					</IconContext.Provider>
					<p>Novo contato</p>
					<IconContext.Provider
						value={{ className: `${styles.icon}` }}
					>
						<FaChevronRight />
					</IconContext.Provider>
				</a>
			</>
		);
	} else {
		return (
			<>
				<a
					data-testid="button"
					href={href}
					className={`${styles.button} ${styles[buttonVariant]}`}
				>
					{buttonText}
				</a>
			</>
		);
	}
}
