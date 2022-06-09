import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Given I am on dataTable page", () => {
  test("Then, pagination of data table is render", () => {
    render(
      <Pagination
        data={[{ firstName: "Laura", lastName: "Nicolay" }]}
        dataLimit="10"
        currentPage="1"
      />
    );
    expect(screen.getByTestId("prev-button")).toBeTruthy();
    expect(screen.getByTestId("next-button")).toBeTruthy();
    expect(screen.getByTestId("page-number")).toBeTruthy();
  });

  test("Then, next button pagination call callback function on click", () => {
    const mockFn = jest.fn();
    render(
      <Pagination
        data={[{ firstName: "Laura", lastName: "Nicolay" }]}
        dataLimit="10"
        currentPage="1"
        setCurrentPage={mockFn}
      />
    );
    fireEvent.click(screen.getByTestId("next-button"));
    expect(mockFn).toHaveBeenCalled();
  });

  test("Then, previous button pagination call callback function on click", () => {
    const mockFn = jest.fn();
    render(
      <Pagination
        data={[{ firstName: "Laura", lastName: "Nicolay" }]}
        dataLimit="10"
        currentPage="3"
        setCurrentPage={mockFn}
      />
    );
    fireEvent.click(screen.getByTestId("prev-button"));
    expect(mockFn).toHaveBeenCalledWith(2);
  });
});
