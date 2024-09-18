"use client";
import React from "react";
import styles from "./button.module.sass";
import Plus from "./svgs/Plus";
import ChevronRight from "./svgs/ChevronRight";

interface buttonProps {
	href?: string;
	buttonText?: string;
	buttonVariant: string;
	novoContato?: boolean;
}

export default function Button(props: buttonProps) {
	if (props.novoContato) {
		return (
			<>
				<a
					data-testid="button"
					href={props.href}
					className={`${styles.button} ${
						styles[props.buttonVariant]
					}`}
				>
					<Plus />
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
					href={props.href}
					className={`${styles.button} ${
						styles[props.buttonVariant]
					}`}
				>
					{props.buttonText}
				</a>
			</>
		);
	}
}
