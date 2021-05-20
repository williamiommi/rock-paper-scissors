import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ScoreBoard from "./ScoreBoard";

describe("ScoreBoard Component", () => {
  afterEach(cleanup);

  test("it renders correctly", () => {
    render(<ScoreBoard />);
  });

  test("it renders rock/paper/scissors logo", () => {
    const { queryByTestId } = render(<ScoreBoard isClassicGame />);
    expect(queryByTestId("image")).toHaveAttribute("alt", "classic logo");
  });

  test("it renders rock/paper/scissors/lizard/spock logo", () => {
    const { queryByTestId } = render(<ScoreBoard />);
    expect(queryByTestId("image")).toHaveAttribute("alt", "bonus logo");
  });

  test("it renders 34", () => {
    const { queryByTestId } = render(<ScoreBoard points={34} />);
    expect(queryByTestId("score")).toHaveTextContent("34");
  });

  test("it renders 999+", () => {
    const { queryByTestId } = render(<ScoreBoard points={1020} />);
    expect(queryByTestId("score")).toHaveTextContent("999+");
  });
});
