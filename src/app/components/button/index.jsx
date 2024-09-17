"use client";
import React from "react";
import styles from "./button.module.sass";
import Plus from "./svgs/Plus";
import ChevronRight from "./svgs/ChevronRight";

export default function Button({ buttonText, buttonVariant, novoContato }) {
	if (novoContato) {
		return (
			<>
				<a className={`${styles.button} ${styles.novo}`}>
					<Plus />
					<p>Novo contato</p>
					<ChevronRight />
				</a>
			</>
		);
	} else {
		return (
			<>
				<a className={`${styles.button} ${styles[buttonVariant]}`}>
					{buttonText}
				</a>
			</>
		);
	}
}
