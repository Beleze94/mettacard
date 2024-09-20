import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../src/app/components/input";

describe("Componente Input", () => {
	test("renderiza corretamente com as props fornecidas", () => {
		const state = "default";
		const name = "inputField";
		const type = "text";
		const placeholder = "Seu nome aqui";
		const label = "Label";
		const helperText = "Helper Text";

		render(
			<Input
				state={state}
				name={name}
				type={type}
				placeholder={placeholder}
				label={label}
				helperText={helperText}
			/>
		);

		const wrapper = screen.getByTestId("wrapper");
		const inputField = screen.getByTestId("inputField");

		expect(wrapper).toBeInTheDocument();
		expect(wrapper).toHaveClass(state);
		expect(wrapper).toHaveTextContent(helperText);
		expect(inputField).toBeInTheDocument();
		expect(inputField).toHaveAttribute("name", name);
		expect(inputField).toHaveAttribute("type", type);
		expect(inputField).toHaveAttribute("placeholder", placeholder);
	});

	test("aplica as classes corretamente", () => {
		const state = "success";
		const name = "inputField";
		const type = "text";
		const placeholder = "Seu nome aqui";
		const label = "Label";
		const helperText = "Helper Text";

		render(
			<Input
				state={state}
				name={name}
				type={type}
				placeholder={placeholder}
				label={label}
				helperText={helperText}
			/>
		);

		const wrapperTest = screen.getByTestId("wrapper");
		const inputTest = screen.getByTestId("input");
		const labelTest = screen.getByTestId("label");
		const inputFieldTest = screen.getByTestId("inputField");
		const iconTest = screen.getByTestId("icon");
		const helperTextTest = screen.getByTestId("helperText");

		expect(wrapperTest).toBeInTheDocument();
		expect(wrapperTest).toHaveClass("wrapper");
		expect(wrapperTest).toHaveClass(state);

		expect(inputTest).toBeInTheDocument();
		expect(inputTest).toHaveClass("input");

		expect(labelTest).toBeInTheDocument();
		expect(labelTest).toHaveClass("label");
		expect(labelTest).toHaveTextContent(label);

		expect(inputFieldTest).toBeInTheDocument();
		expect(inputFieldTest).toHaveClass("inputField");

		expect(iconTest).toBeInTheDocument();
		expect(iconTest).toHaveClass("icon");

		expect(helperTextTest).toBeInTheDocument();
		expect(helperTextTest).toHaveClass("helperText");
	});
});
