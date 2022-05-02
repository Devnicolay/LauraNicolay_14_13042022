import React from "react";

interface TableBodyProps {
  columns: Array<{ label: string; id: string }>;
  data: Array<any>;
}

const TableBody: React.FC<TableBodyProps> = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr>
            {columns.map((col) => {
              return <td>{item[col.id]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
