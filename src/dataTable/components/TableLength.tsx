import React from "react";

interface TableLengthProps {
  onChangeSelect: (value) => void;
}

const TableLength: React.FC<TableLengthProps> = ({ onChangeSelect }) => {
  return (
    <div className="table-length">
      <label>
        Show
        <select
          name="tableLength"
          onChange={(e) => onChangeSelect(e.target.value)}
          data-testid="table-select"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
  );
};

export default TableLength;
