import React from 'react';
import './style.css';
import SortableTable from './SortableTable';

const items = [
  { name: 'Item A', price: 10 },
  { name: 'Item B', price: 15 },
  { name: 'Item C', price: 5 },
  // Add more items
];
export default function App() {
  return (
    <div>
      <SortableTable items={items} />
    </div>
  );
}
