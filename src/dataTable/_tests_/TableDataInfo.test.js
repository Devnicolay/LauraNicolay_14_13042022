import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableDataInfo from "../components/TableDataInfo";

describe("Given I am on dataTable page", () => {
  test("that dataTable info for number of data on current page is render", () => {
    render(<TableDataInfo dataLimit={10} dataLength={34} currentPage={1} />);
    expect(screen.getByText("Showing 1 to 10 of 34 entries")).toBeTruthy();
  });
});
