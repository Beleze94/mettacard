import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NameInput from "../src/app/components/nameInput";

describe("Componente Name Input", () => {
	test("renderiza corretamente a mensagem de erro 1", () => {
		render(<NameInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: "as" } });
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent("Insira o nome completo");
	});

	test("renderiza corretamente a mensagem de erro 2", () => {
		render(<NameInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, {
			target: {
				value: "Este é um nome extremamente grande e não deve ser aceito",
			},
		});
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent("Por favor, utilize abreviações");
	});

	test("renderiza corretamente a mensagem de erro 3", () => {
		render(<NameInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, {
			target: { value: "Este#é um@nome 1nvál1do" },
		});
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent(
			"Não utilize números ou caracteres especiais"
		);
	});

	test("renderiza corretamente o sucesso", () => {
		render(<NameInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, {
			target: { value: "Nome Sobrenome Junior" },
		});
		expect(wrapper).toHaveClass("success");
	});
});
