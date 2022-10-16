import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map((category, index) => (
          <div 
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </div>
        ))
      }
    </div>
  )
};

export default Categories;
