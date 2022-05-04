import React from "react";

interface TableSearchProps {
  onChangeSearch: (value) => void;
}

const TableSearch: React.FC<TableSearchProps> = ({ onChangeSearch }) => {
  return (
    <form className="search">
      <label>Search:</label>
      <input type="text" onChange={(e) => onChangeSearch(e.target.value)} />
    </form>
  );
};

export default TableSearch;
