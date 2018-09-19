import React, { Component } from 'react';
import './FilterControls.css';

class FilterControls extends Component {

  /* TO DO: Figure out how to contingently structure
   * state based on the attributes passed as props 
   */
    constructor(props) {
      super(props);
      this.state = {
        filterAttributes: {}
      };

      // give state the attributes relevant to this filter
      props.attributes.forEach(attribute => {
        this.state[attribute.name] = '';  
      });
    }
  
  updateInput = (e) => {
    let newState = {};
    newState[e.target.dataset.attribute] = e.target.value;

    this.setState(newState);
  }

  updateAttribute = (e) => {
    let newAttribute = {};
    newAttribute[e.target.dataset.attribute] = e.target.value;
    this.setState(prevState => {
      console.log('prevState first =',prevState);
      Object.assign(prevState.filterAttributes,newAttribute);
      console.log('prevState now =',prevState);
      return prevState;
    }, console.log('newState =',this.state));
    
    this.props.updateSvgId();
  }
  
  render() {
    return (
        <div className="filter-controls">
          <div className="code">
            <div className="filter-tag">&lt;filter ... &gt;</div>
            <span className="fe-tag">&lt;{this.props.filter.name}</span>
            <div className="attribute-controls">  
              {this.props.filter.attributes.map(attribute => 
                <label 
                  key={attribute.name}>{attribute.name} = "
                  <input 
                    type="text" 
                    onChange={this.updateInput} 
                    onBlur={this.updateAttribute}
                    data-attribute={attribute.name} />"
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
              {React.createElement(this.props.filter.name,this.state.filterAttributes,'')}
              </filter>
            </defs>
          </svg>
        </div>
      );
  }
  
}

export default FilterControls;