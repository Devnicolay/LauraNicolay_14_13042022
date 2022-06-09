import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableHead from "../components/TableHead";
import { columns } from "../columns";
import { sorting } from "../services/sortData";
import React from "react";

jest.mock("../services/sortData", () => {
  return {
    sorting: jest.fn(),
  };
});

describe("Given I am on dataTable page", () => {
  test("Then, datatTable display name of columns", () => {
    const order = {
      order: "ASC",
      column: null,
      type: null,
    };
    render(<TableHead columns={columns} order={order} />);
    expect(screen.getByText("First Name")).toBeTruthy();
  });
});

describe("Given I am on dataTable page and I click on firstName column", () => {
  test("Then, dataTable head call callback function for sorting firstname column", () => {
    const order = {
      order: "ASC",
      column: null,
      type: null,
    };
    render(<TableHead columns={columns} order={order} />);
    fireEvent.click(screen.getByTestId("firstName"));
    expect(sorting).toHaveBeenCalled();
  });
});
