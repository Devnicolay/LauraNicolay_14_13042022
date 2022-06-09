import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import DataTable from "../components/DataTable";
import { columns } from "../columns";

describe("Given I am on dataTable page", () => {
  test("Then, dataTable is render", () => {
    render(
      <DataTable
        data={[{ firstName: "Laura", region: "meurthe et moselle" }]}
        columns={columns}
      />
    );
    expect(screen.getByText("Laura")).toBeTruthy();
    expect(screen.queryByText("meurthe et moselle")).toBeFalsy();
    expect(screen.queryByText("region")).toBeFalsy();
    expect(screen.getByText("First Name")).toBeTruthy();
    expect(screen.getByText("Last Name")).toBeTruthy();
    expect(screen.getByText("Start Date")).toBeTruthy();
    expect(screen.getByText("Department")).toBeTruthy();
    expect(screen.getByText("Date of Birth")).toBeTruthy();
    expect(screen.getByText("Street")).toBeTruthy();
    expect(screen.getByText("City")).toBeTruthy();
    expect(screen.getByText("State")).toBeTruthy();
    expect(screen.getByText("Zip Code")).toBeTruthy();
  });
});
