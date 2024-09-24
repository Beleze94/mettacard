import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CPFInput from "../src/app/components/cpfInput";

describe("Componente CPF Input", () => {
	test("renderiza corretamente a mensagem de erro", () => {
		render(<CPFInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: "12345678901" } });
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent("CPF inválido");
	});

	test("renderiza corretamente o sucesso", () => {
		render(<CPFInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, {
			target: { value: "48992015160" },
		});
		expect(wrapper).toHaveClass("success");
	});
});
