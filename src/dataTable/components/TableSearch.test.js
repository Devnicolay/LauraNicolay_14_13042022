import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableSearch from "./TableSearch";

test("that display search input", () => {
  render(<TableSearch />);
  expect(screen.getByText("Search:")).toBeTruthy();
  expect(screen.getByTestId("table-search")).toBeTruthy();
});

test("that table search call callback function on input search", () => {
  const mockFn = jest.fn();
  render(<TableSearch onChangeSearch={mockFn} />);
  fireEvent.change(screen.getByTestId("table-search"), {
    target: { value: "laura" },
  });
  expect(mockFn).toHaveBeenCalledWith("laura");
  expect(mockFn).not.toHaveBeenCalledWith("pierre");
});
