import React, { Component } from 'react';
import './FilterPlayground.css';
import FilterControls from './FilterControls.js';
import FilterResult from './FilterResult.js';

class FilterPlayground extends Component {
  state = {
    svgId: 'svg-0'
  };

  updateSvgId = () => {
    this.setState(prevState => {
      const prevId = prevState.svgId.split('-');
      const prevNum = prevId[1];
      const newNum = (parseInt(prevNum, 10) + 1) % 10;
      const newId = 'svg-' + newNum;
      
      return {
        svgId: newId  
      };
    });
  }
  
  render() {
    console.log('this.props.attributes =',this.props.attributes);
    
    return (
      <div className="filter-playground">
        <button type="button" className="go-back-button" onClick={this.props.showMainMenu}>Choose a different filter</button>
        <FilterControls 
          filter={this.props.filter}
          attributes={this.props.attributes}
          updateSvgId={this.updateSvgId}
          svgId={this.state.svgId}/>
        <FilterResult 
          svgId={this.state.svgId}/>
      </div>
    );
  }
}

export default FilterPlayground;