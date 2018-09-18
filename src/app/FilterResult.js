import React from 'react';
import flower from '../assets/flower.jpg';
import './FilterResult.css';

const FilterResult = (props) => {
  return (
    <div className="filter-result">
      
      <div className="filter-target example-square-frame">
        <div className="example-square"></div>
      </div>
      
      <div className="filter-target example-text">I am the very model of a modern major general.  I've information vegetable, animal, and mineral.</div>
      
      <img src={flower} alt="A purple flower" className="filter-target example-image"></img>
    
    </div>
  );
}

export default FilterResult;