import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  static filterButtons = ['feGaussianBlur', 'feColorMatrix', 'feConvolveMatrix', 'feMorphology', 'feOffset', 'feBlend'];

  goToFilter = (e) => {
    this.props.showFilterPlayground(e.target.dataset.filter);
  }

  render() {
    return (
      <div className="main-menu">
        <h2>Pick a filter to test</h2>
        <div className="main-menu__buttons">
          { MainMenu.filterButtons.map(button => 
            <button type="button" key={button} data-filter={button} className="main-menu__button" onClick={this.goToFilter}>{button}</button>
          )}
        </div>
      </div>
    );
  }
}

export default MainMenu;