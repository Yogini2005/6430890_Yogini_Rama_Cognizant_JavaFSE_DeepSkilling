import React from 'react';

const ListComponent = ({ items }) => {
  return (
    <div>
      <h2>📚 Course List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
