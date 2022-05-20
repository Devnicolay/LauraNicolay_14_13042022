/**
 * Sort data on clicked column
 * @param data data of dataTable
 */
export const getSort = (data, order) => {
  // Sort date type
  if (order.type === "date") {
    if (order.order === "ASC" && order.column) {
      const sorted = data
        .slice(0)
        .sort((a, b) =>
          new Date(a[order.column]) > new Date(b[order.column]) ? 1 : -1
        );
      return sorted;
    }
    if (order.order === "DESC" && order.column) {
      const sorted = data
        .slice(0)
        .sort((a, b) =>
          new Date(a[order.column]) < new Date(b[order.column]) ? 1 : -1
        );
      return sorted;
    }
  }

  // Sort number type
  if (order.type === "number") {
    if (order.order === "ASC" && order.column) {
      return data.sort((a, b) => (a[order.column] > b[order.column] ? 1 : -1));
    }
    if (order.order === "DESC" && order.column) {
      return data.sort((a, b) => (a[order.column] < b[order.column] ? 1 : -1));
    }
  }
  // Sort string type
  if (order.order === "ASC" && order.column) {
    return data.sort((a, b) =>
      a[order.column].toLowerCase() > b[order.column].toLowerCase() ? 1 : -1
    );
  }
  if (order.order === "DESC" && order.column) {
    return data.sort((a, b) =>
      a[order.column].toLowerCase() < b[order.column].toLowerCase() ? 1 : -1
    );
  }
  return data;
};

/**
 *
 * Change ASC and DESC for column cliked
 * @param col column clicked for sort
 */
export const sorting = (col, type, order, setOrder) => {
  if (order.column === col) {
    setOrder({
      order: order.order === "ASC" ? "DESC" : "ASC",
      column: col,
      type: type,
    });
  } else {
    setOrder({ order: "ASC", column: col, type: type });
  }
};
