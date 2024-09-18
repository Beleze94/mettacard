import styles from "./svg.module.css";

export default function Plus() {
	return (
		<>
			<svg
				className={`${styles.svgPlus}`}
				height="16"
				width="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Plus" clipPath="url(#clip0_4716_2205)">
					<path
						id="Plus_2"
						d="M14.8571 6.28571H9.71429V1.14286C9.71429 0.511786 9.2025 0 8.57143 0H7.42857C6.7975 0 6.28571 0.511786 6.28571 1.14286V6.28571H1.14286C0.511786 6.28571 0 6.7975 0 7.42857V8.57143C0 9.2025 0.511786 9.71429 1.14286 9.71429H6.28571V14.8571C6.28571 15.4882 6.7975 16 7.42857 16H8.57143C9.2025 16 9.71429 15.4882 9.71429 14.8571V9.71429H14.8571C15.4882 9.71429 16 9.2025 16 8.57143V7.42857C16 6.7975 15.4882 6.28571 14.8571 6.28571Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_4716_2205">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</>
	);
}
