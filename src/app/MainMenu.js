import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
  static filterButtons = ['feGaussianBlur', 'feColorMatrix', 'feConvolveMatrix', 'feMorphology', 'feOffset', 'feBlend'];
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log('=== MainMenu.render(): filterButtons =',MainMenu.filterButtons);
    return (
      <div className="main-menu">
        <h2>Pick a filter to test</h2>
        <div className="main-menu__buttons">
          { MainMenu.filterButtons.map(button => 
            <button type="button" className="main-menu__button" onClick={this.props.showFilterPlayground}>{button}</button>
          )}
        </div>
      </div>
    );
  }
}

export default MainMenu;