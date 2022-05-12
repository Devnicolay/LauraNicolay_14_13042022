import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

interface TableHeadProps {
  columns: Array<{ label: string; id: string; type: string }>;
  sorting: (id, type) => void;
}

// const HandleClick = (e) => {
//   e.target.style.backgroundColor = "#FAFAFA";
// };

const TableHead: React.FC<TableHeadProps> = ({ columns, sorting }) => {
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
                {/* <FontAwesomeIcon
                  className="sortAsc"
                  icon={faSortUp}
                  onClick={() => {
                    sortingAsc(item.id);
                  }}
                />
                <FontAwesomeIcon
                  className="sortDesc"
                  icon={faSortDown}
                  onClick={() => {
                    sortingDesc(item.id);
                  }}
                /> */}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
