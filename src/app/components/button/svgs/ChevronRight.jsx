import styles from "./svg.module.css";

export default function ChevronRight() {
	return (
		<>
			<svg
				className={`${styles.svgChevronRight}`}
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Chevron right" clipPath="url(#clip0_4001_2646)">
					<path
						id="Vector"
						d="M10.4998 6L9.08984 7.41L13.6698 12L9.08984 16.59L10.4998 18L16.4998 12L10.4998 6Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_4001_2646">
						<rect
							width="24"
							height="24"
							fill="white"
							transform="translate(0.5)"
						/>
					</clipPath>
				</defs>
			</svg>
		</>
	);
}
