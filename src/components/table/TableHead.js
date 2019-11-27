import React from "react";
const TableHead = props => {
  const { headings } = props;
  return (
    <thead>
      <tr>
        {headings.map((heading, index) => (
          <th key={index}> {heading}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
