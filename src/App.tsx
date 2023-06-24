import React, { useState } from 'react';
import './App.css';
import { ProductCard } from './ProductCard';
import { CustomInput } from './CustomInput';

const productArray = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Orange',
  },
  {
    id: 3,
    name: 'Tomato',
  },
];

function App() {
  const [limit, setLimit] = useState(10);

  const addLimit = () => {
    setLimit(limit + 1);
  };

  const deleteLimit = () => {
    setLimit(limit - 1);
  };

  return (
    <div className="App">
      <CustomInput />
      <button onClick={deleteLimit} disabled={limit === 0}>Delete</button>
      <span>{limit}</span>
      <button onClick={addLimit} disabled={limit === 10}>Add</button>
      {productArray.map(({ id, name }) => (
        <ProductCard productName={name} key={id} limit = {limit} />
      ))}
    </div>
  );
}

export default App;
