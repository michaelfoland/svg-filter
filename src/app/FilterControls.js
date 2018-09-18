import React, { Component } from 'react';
import './FilterControls.css';

class FilterControls extends Component {

  /* TO DO: Figure out how to contingently structure
   * state based on the attributes passed as props 
   */
  constructor(props) {
    super(props);
    this.state = {};
    
    props.attributes.forEach(attribute => {
      this.state[attribute.name] = '';  
    });
    
    console.log('===leaving constructor, this.state = ',this.state);
  }
  
  render() {
    return (
        <div className="filter-controls">
          <div className="code">
            <div className="filter-tag">&lt;filter ... &gt;</div>
            <span className="fe-tag">&lt;{this.props.filter.name}</span>
            <div className="attribute-controls">  
              {this.props.filter.attributes.map(attribute => 
                <label key={attribute}>{attribute} = "
                  <input type="text" onBlur={this.updateAttribute} data-attribute={attribute} />"
                </label>  
              )}
            </div>
            <span className="fe-tag">/&gt;</span>
            <div className="filter-tag">&lt;/filter ... &gt;</div>
          </div>

          <div className="hints">
            Hints
          </div>

          <svg id="svg" version="1.1" baseProfile="full"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              {React.createElement(this.props.filter.name,{},'')}
            </defs>
          </svg>
        </div>
      );
  }
  
}

export default FilterControls;