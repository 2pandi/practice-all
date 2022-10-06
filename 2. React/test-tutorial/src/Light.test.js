import { fireEvent, render, screen } from "@testing-library/react";
import Light from "./Light";

describe("테스트들", () => {
  it("renders Light Component", () => {
    render(<Light name="전원" />);
    const nameElement = screen.getByText(/전원 OFF/i);
    expect(nameElement).toBeInTheDocument();
  });
  test("off button disabled", () => {
    render(<Light name="전원" />);
    const offButtonElement = screen.getByRole("button", { name: "OFF" });
    expect(offButtonElement).toBeDisabled();
  });
  it("change from off to on", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    fireEvent.click(onButtonElement);
    expect(onButtonElement).toBeDisabled();
  });
});
