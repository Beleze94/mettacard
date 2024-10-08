import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TelInput from "../src/app/components/telInput";

describe("Componente TelInput", () => {
	test("renderiza corretamente as mensagens de erro", () => {
		render(<TelInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: 123 } });
		expect(wrapper).toHaveClass("error");
		expect(helperText).toHaveTextContent("Insira número válido");
	});

	test("renderiza corretamente sucesso", () => {
		render(<TelInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");
		const wrapper = screen.getByTestId("wrapper");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: 11940289822 } });
		expect(wrapper).toHaveClass("success");
	});
});
