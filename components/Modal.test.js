import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./Modal";

describe("Modal Component", () => {
  afterEach(cleanup);

  test("it renders correctly", () => {
    render(<Modal />);
  });

  test("it has correct image alt", () => {
    const { queryByTestId } = render(<Modal />);
    expect(queryByTestId("image")).toHaveAttribute("alt", "bonus rules");
  });

  test("it has correct image alt", () => {
    const { queryByTestId } = render(<Modal isClassicGame={true} />);
    expect(queryByTestId("image")).toHaveAttribute("alt", "classic rules");
  });
  
  test("it has correct classes", () => {
    const { queryByTestId } = render(<Modal />);
    expect(queryByTestId("wrapper")).toHaveClass(
      "opacity-0 pointer-events-none"
    );
    expect(queryByTestId("content")).toHaveClass(
      "desktop:scale-95 desktop:-translate-y-5"
    );
  });

  test("it has correct classes", () => {
    const { queryByTestId } = render(<Modal isVisible={true} />);
    expect(queryByTestId("wrapper")).toHaveClass(
      "opacity-100 pointer-events-auto"
    );
    expect(queryByTestId("content")).toHaveClass(
      "desktop:scale-100 desktop:translate-y-0"
    );
  });
});
