import React, { Component } from 'react';
import './FilterPlayground.css';
import FilterControls from './FilterControls.js';
import FilterResult from './FilterResult.js';

class FilterPlayground extends Component {
  render() {
    return (
      <div className="filter-playground">
        <button type="button" onClick={this.props.showMainMenu}>Back to menu</button>
        <FilterControls />
        <FilterResult />
      </div>
    );
  }
}

export default FilterPlayground;