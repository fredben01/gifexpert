import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(['Cat']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'new']);
  //   setCategories((cats) => [...cats, 'new']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
