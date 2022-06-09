import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableSearch from "../components/TableSearch";

describe("Given I am on dataTable page", () => {
  test("Then, display search input", () => {
    render(<TableSearch />);
    expect(screen.getByText("Search:")).toBeTruthy();
    expect(screen.getByTestId("table-search")).toBeTruthy();
  });
});

describe("Given I am on dataTable page and I enter word in input search", () => {
  test("Then, dataTable call callback function on input search", () => {
    const mockFn = jest.fn();
    render(<TableSearch onChangeSearch={mockFn} />);
    fireEvent.change(screen.getByTestId("table-search"), {
      target: { value: "laura" },
    });
    expect(mockFn).toHaveBeenCalledWith("laura");
    expect(mockFn).not.toHaveBeenCalledWith("pierre");
  });
});
