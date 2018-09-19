import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  /* static filterButtons = ['feGaussianBlur', 'feColorMatrix', 'feConvolveMatrix', 'feMorphology', 'feOffset', 'feBlend']; */

  goToFilter = (e) => {
    this.props.showFilterPlayground(e.target.dataset.filter);
  }

  render() {
    return (
      <div className="main-menu">
        <h1>SVG Filter Playground</h1>
        <h2>Pick a filter to test</h2>
        <div className="main-menu__buttons">
          { this.props.filters.map(filter => 
            <button type="button" key={filter} data-filter={filter} className="main-menu__button" onClick={this.goToFilter}>{filter}</button>
          )}
        </div>
      </div>
    );
  }
}

export default MainMenu;