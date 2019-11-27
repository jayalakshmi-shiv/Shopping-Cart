import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = props => {
  const { headings, rows, handleChange, removeProduct } = props;
  return (
    <div>
      <table className="table">
        <TableHead headings={headings} />
        {rows.map((row, index) => (
          <TableBody
            key={index}
            row={row}
            indexValue={index}
            handleChange={handleChange}
            removeProduct={removeProduct}
          />
        ))}
      </table>
    </div>
  );
};
export default Table;
