import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting module", () => {
  test("Rendering Hello world ! as a text", () => {
    // Arrange
    render(<Greeting />);

    //   Act
    // ........

    //  Assert
    const helloWorldElement = screen.getByText("hello world", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Rendering 'It's good to see you again !'  as a text before the button was clicked", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("It's good to see you again !", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Rendering 'text changed'  as a text after the button was clicked", () => {
    //   Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textChanged = screen.getByText("text changed");
    expect(textChanged).toBeInTheDocument();
  });

  test("No render 'It's good to see you again !' after the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByText("Change text");
    userEvent.click(button);

    // Assert
    const elementIsnot = screen.queryByText("It's good to see you again !", {
      exact: false,
    });

    // expect(elementIsnot).not.toBeInTheDocument()
    expect(elementIsnot).toBeNull();
  });
});
