"use client";
import React from "react";
import styles from "./button.module.css";
import Plus from "./svgs/Plus";
import ChevronRight from "./svgs/ChevronRight";

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
					className={`${styles.button} ${styles[buttonVariant]}`}
				>
					<Plus className={"svg-plus"} />
					<p>Novo contato</p>
					<ChevronRight />
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
