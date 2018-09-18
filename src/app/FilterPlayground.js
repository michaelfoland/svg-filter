import React, { Component } from 'react';
import './FilterPlayground.css';
import FilterControls from './FilterControls.js';
import FilterResult from './FilterResult.js';

class FilterPlayground extends Component {
  render() {
    console.log('this.props.attributes =',this.props.attributes);
    
    return (
      <div className="filter-playground">
        <button type="button" onClick={this.props.showMainMenu}>Back to menu</button>
        <FilterControls 
          filter={this.props.filter}
          attributes={this.props.attributes}/>
        <FilterResult />
      </div>
    );
  }
}

export default FilterPlayground;