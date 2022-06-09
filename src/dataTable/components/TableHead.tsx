import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { sorting } from "../services/sortData";

interface TableHeadProps {
  columns: Array<{ label: string; id: string; type: string }>;
  order: any;
  setOrder: any;
}

// const HandleClick = (e) => {
//   e.target.style.backgroundColor = "#FAFAFA";
// };

const TableHead: React.FC<TableHeadProps> = ({ columns, order, setOrder }) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <th
              id={item.id}
              key={item.id}
              onClick={() => sorting(item.id, item.type, order, setOrder)}
              data-testid={item.id}
            >
              {item.label}
              <div className="icons-sort">
                {order.column === item.id ? (
                  order.column === item.id && order.order === "ASC" ? (
                    <FontAwesomeIcon className="sortAsc" icon={faSortUp} />
                  ) : (
                    <FontAwesomeIcon className="sortDesc" icon={faSortDown} />
                  )
                ) : (
                  <FontAwesomeIcon className="sortDesc" icon={faSort} />
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
