import React, { useState } from 'react';
import './style.css';

export default function SortableTable({ items }) {
  const [sortedItems, setSortedItems] = useState(items);
  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'ascending',
  });

  const sortItems = (key) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sorted = [...items].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    if (direction === 'descending') {
      sorted.reverse();
    }

    setSortedItems(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortItems('name')}>
            Name{' '}
            {sortConfig.key === 'name' && (
              <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>
            )}
          </th>
          <th onClick={() => sortItems('price')}>
            Price{' '}
            {sortConfig.key === 'price' && (
              <span>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</span>
            )}
          </th>
          {/* Add more table headers for additional criteria */}
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            {/* Add more table cells for additional data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
