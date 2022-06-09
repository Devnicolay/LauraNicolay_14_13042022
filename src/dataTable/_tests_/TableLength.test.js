import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableLength from "../components/TableLength";

describe("Given I am on dataTable page and I select number of show entries", () => {
  test("Then, dataTable call callback function on input change", () => {
    const mockFn = jest.fn();
    render(<TableLength onChangeSelect={mockFn} />);
    fireEvent.change(screen.getByTestId("table-select"), {
      target: { value: 10 },
    });
    expect(mockFn).toHaveBeenCalledWith("10");
    expect(mockFn).not.toHaveBeenCalledWith("50");
    expect(screen.getByTestId("table-select")).toBeTruthy();
    expect(screen.getByText("10")).toBeTruthy();
  });
});
