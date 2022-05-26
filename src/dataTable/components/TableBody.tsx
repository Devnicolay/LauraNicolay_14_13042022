import React from "react";

interface TableBodyProps {
  columns: Array<{ label: string; id: string }>;
  data: Array<any>;
}

const TableBody: React.FC<TableBodyProps> = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            {columns.map((col) => {
              return <td key={col.id}>{item[col.id]}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
