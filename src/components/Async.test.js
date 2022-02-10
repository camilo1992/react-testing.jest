import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Rendering module", () => {
  test("'Renders module correctly' after fetching data", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "pi", title: "firts post" }],
    });
    // Arrange
    render(<Async />);

    // Act

    // Asserts
    // const fetchedElements = await screen.findAllByRole("listitem", {exact:fasle}, { timeout: 3000 });
    const fetchedElements = await screen.findAllByRole("listitem");
    expect(fetchedElements).not.toHaveLength(0);
  });
});
