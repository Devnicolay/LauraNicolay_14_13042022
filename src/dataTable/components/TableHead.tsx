import React from "react";

interface TableHeadProps {
  columns: Array<{ label: string; id: string }>;
}

const HandleClick = (e) => {
  e.target.style.backgroundColor = "#FAFAFA";
};

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <th id={item.id} key={item.id} onClick={(e) => HandleClick(e)}>
              {item.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
