import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
