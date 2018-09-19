import React from 'react';
import flower from '../assets/flower.jpg';
import './FilterResult.css';

const FilterResult = (props) => {
  const svgId = 'url(#' + props.svgId + ')';
  
  return (
    <div className="filter-result">
      
      <div className="example-square-frame" style={{filter: svgId }}>
        <div className="example-square"></div>
      </div>
      
      <div className="example-text" style={{filter: svgId }}>I am the very model of a modern major general.  I've information vegetable, animal, and mineral.</div>
      
      <img src={flower} alt="A purple flower" className="example-image" style={{filter: svgId }}></img>
    
    </div>
  );
}

export default FilterResult;