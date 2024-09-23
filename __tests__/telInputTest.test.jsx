import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TelInput from "../src/app/components/telInput";

describe("Componente Input", () => {
	test("renderiza corretamente as mensagens de erro", () => {
		render(<TelInput />);

		const helperText = screen.getByTestId("helperText");
		const inputField = screen.getByTestId("inputField");

		expect(helperText).toBeInTheDocument();
		expect(inputField).toBeInTheDocument();

		fireEvent.change(inputField, { target: { value: 123 } });
		expect(inputField).toHaveTextContent("123");
	});
});
