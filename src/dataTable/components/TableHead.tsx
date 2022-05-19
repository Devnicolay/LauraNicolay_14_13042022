import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

interface TableHeadProps {
  columns: Array<{ label: string; id: string; type: string }>;
  sorting: (id, type) => void;
  iconSort: any;
}

// const HandleClick = (e) => {
//   e.target.style.backgroundColor = "#FAFAFA";
// };

const TableHead: React.FC<TableHeadProps> = ({
  columns,
  sorting,
  iconSort,
}) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <th
              id={item.id}
              key={item.id}
              onClick={() => sorting(item.id, item.type)}
            >
              {item.label}
              <div className="icons-sort">
                {iconSort.column === item.id ? (
                  iconSort.column === item.id && iconSort.order === "ASC" ? (
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
