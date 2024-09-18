import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../src/app/components/button";

describe("Componente Button", () => {
	test("renderiza corretamente com as props fornecidas", () => {
		const href = "/sobre";
		const text = "Saiba Mais";
		const variant = "filledDefault";

		render(
			<Button href={href} buttonText={text} buttonVariant={variant} />
		);

		const linkElement = screen.getByRole("link", { name: text });

		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute("href", href);
		expect(linkElement).toHaveTextContent(text);
		expect(linkElement).toHaveClass(variant);
	});

	test("cria o botão especial de Novo Contato", () => {
		const href = "/contato";
		const variant = "novoContato";

		render(<Button href={href} novoContato buttonVariant={variant} />);

		const linkElement = screen.getByTestId("button");
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveTextContent("Novo contato");
		expect(linkElement).toHaveClass(variant);
	});

	test('aplica as classes "button" corretamente', () => {
		const href = "/contato";
		const text = "Entre em Contato";
		const variant = "outlinedDefault";

		render(
			<Button href={href} buttonText={text} buttonVariant={variant} />
		);

		const linkElement = screen.getByRole("link", { name: text });

		expect(linkElement).toHaveClass("button");
	});
});
