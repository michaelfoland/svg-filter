import React, { Component } from 'react';
import './FilterControls.css';

class FilterControls extends Component {

  /* TO DO: Figure out how to contingently structure
   * state based on the attributes passed as props 
   */
    constructor(props) {
      super(props);
      this.state = {
        filterAttributes: {},
        selectedAttribute: null
      };

      // give state the attributes relevant to this filter
      props.attributes.forEach(attribute => {
        // eslint-disable-next-line
        this.state[attribute.name] = '';  
      });
    }
  
  updateInput = (e) => {
    let newState = {};
    newState[e.target.dataset.attribute] = e.target.value;

    this.setState(newState);
  };

  setAttribute = (e) => { 
    let { attributeName, attributeValue } = e.target.dataset;
    
    this.setState(prevState => {
      prevState.filterAttributes[attributeName] = attributeValue;
      prevState[attributeName] = attributeValue;
      return prevState;
    }, console.log('after setAttribute(), this.state =',this.state));
    
    this.props.updateSvgId();
  };
  


  updateAttribute = (e) => {
    console.log('=== updateAttribute() ===');
    
    let newAttribute = {};
    
    // if (e.target.value === '') return; // in the future, this is where input validation should take place
    
    newAttribute[e.target.dataset.attribute] = e.target.value;
    this.setState(prevState => {
      Object.assign(prevState.filterAttributes,newAttribute);
      return prevState;
    });
    
    this.props.updateSvgId();
  }
  
  handleBlur = (e) => {
    console.log('=== handleBlur() ===')
    /*
    this.setState({
      selectedAttribute: null
    });
    */
    
    this.updateAttribute(e);
  }
  
  showHints = (e) => {
    const targetAttribute = this.props.attributes.find(potentialAttribute => potentialAttribute.name === e.target.dataset.attribute);
    
    this.setState({
      selectedAttribute: targetAttribute
    });
  }
  
  render() {
    return (
        <div className="filter-controls">
          <div className="code">
            <div className="filter-tag">&lt;filter ... &gt;</div>
            <span className="fe-tag">&lt;{this.props.filter.name}</span>
            <div className="attribute-controls">  
              {this.props.filter.attributes.map(attribute => 
                <label className={attribute === this.state.selectedAttribute && 'selected'}
                  key={attribute.name}>
                    <span>{attribute.name} = "</span>
                    <input 
                      type="text" 
                      onChange={this.updateInput} 
                      onBlur={this.handleBlur}
                      onFocus={this.showHints}
                      value={this.state[attribute.name]}
                      data-attribute={attribute.name} />
                    <span>"</span>
                </label>  
              )}
            </div>
            <span className="fe-tag">/&gt;</span>
            <div className="filter-tag">&lt;/filter ... &gt;</div>
          </div>

          <div className="hints">
            {this.state.selectedAttribute 
              ? <div className="hints__info">
                  <div className="hints__info-header"><h4>Values</h4><small>[click to choose]</small></div>
                  <div className="hints__values">
                    {this.state.selectedAttribute.values.map(value => 
                      <div key={value.value} className="potential-value">                                      
                        <button 
                          className="potential-value__button" 
                          data-attribute-value={value.value} 
                          data-attribute-name={this.state.selectedAttribute.name}
                          onClick={this.setAttribute}>{value.name}</button>
                        {value.notes && <span className="potential-value__notes">{value.notes}</span>}
                      </div>
                    )}
                  </div>
                  <h4>Defaults</h4>
                  <div className="hints__defaults">
                    <ul>
                    {this.state.selectedAttribute.defaults.map(def => 
                      <li key={def.value} className="default">
                        {def.value}
                        {def.notes && <span className="default__notes">{def.notes}</span>  }
                      </li>  
                    )}
                    </ul>
                  </div>
                </div>
              : <div className="hints__initial"> 
                  <h5>Click on an attribute to get information about values that it accepts.</h5>
                </div>
            }
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