import React, { Component } from 'react';
import './FilterControls.css';

class FilterControls extends Component {

  /* TO DO: Figure out how to contingently structure
   * state based on the attributes passed as props 
   */
    constructor(props) {
      super(props);
      this.state = {};

      // give state the attributes relevant to this filter
      props.attributes.forEach(attribute => {
        this.state[attribute.name] = '';  
      });
    }
  
  updateAttribute = (e) => {
    let newState = {};
    newState[e.target.dataset.attribute] = e.target.value;

    // Order is probably important here
    this.setState(newState);
    this.props.updateSvgId();
  }
  
  render() {
    // Put only non-empty values into filterProps array
    const keys = Object.keys(this.state);
    
    let filterProps = {};
    
    // Here we're just assuming values are valid.
    // At some point we'll have to check for validity
    keys.forEach(key => {
      if (this.state[key] !== '') {
        filterProps[key] = this.state[key];
      }
    });
    
    return (
        <div className="filter-controls">
          <div className="code">
            <div className="filter-tag">&lt;filter ... &gt;</div>
            <span className="fe-tag">&lt;{this.props.filter.name}</span>
            <div className="attribute-controls">  
              {this.props.filter.attributes.map(attribute => 
                <label key={attribute.name}>{attribute.name} = "
                  <input type="text" onChange={this.updateAttribute} data-attribute={attribute.name} />"
                </label>  
              )}
            </div>
            <span className="fe-tag">/&gt;</span>
            <div className="filter-tag">&lt;/filter ... &gt;</div>
          </div>

          <div className="hints">
            Hints
          </div>

          <svg version="1.1" baseProfile="full"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id={this.props.svgId} x="0" y="0">
              {React.createElement(this.props.filter.name,filterProps,'')}
              </filter>
            </defs>
          </svg>
        </div>
      );
  }
  
}

export default FilterControls;