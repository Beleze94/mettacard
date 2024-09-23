import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailInput from "../src/app/components/emailInput";

describe("Componente Email Input", () => {
	test("renderiza corretamente as mensagens de erro", () => {
		render(<EmailInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: "gustavi23" } });
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent("Insira um e-mail válido");
	});

	test("renderiza corretamente sucesso", () => {
		render(<EmailInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: "teste@gmail.com" } });
		expect(wrapper).toHaveClass("success");
	});
});
