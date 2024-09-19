import styles from "./page.module.css";
import Button from "./components/button";
import Input from "./components/input";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Button novoContato></Button>
				<Input />
				<Button
					buttonVariant="filledDisable"
					buttonText="Botão"
				></Button>
			</main>
		</div>
	);
}
