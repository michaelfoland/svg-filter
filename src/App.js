import React, { Component } from 'react';
import './App.css';
import MainMenu from './app/MainMenu.js';
import FilterPlayground from './app/FilterPlayground.js';
import { filters, attributes } from './app/filters.js';


class App extends Component {
  
  state = {
    currentView: 'menu', // 'menu' or 'filter'
    selectedFilter: ''
  };
  
  
  toggleView = (filterName) => {
    this.setState(prevState => {
      let newView;
      let newFilter;
      
      newView = prevState.currentView === 'menu' ? 'filter' : 'menu';
      newFilter = typeof filterName === 'string' ? filterName : '';
      
      return {
        currentView: newView,
        selectedFilter: newFilter
      };
    });
  };

  getSelectedFilter() {
    let targetFilter = filters.find(item => item.name === this.state.selectedFilter);
    
    return targetFilter;
  }

  getSelectedAttributes() {
    let targetFilter = this.getSelectedFilter();
    
    return targetFilter.attributes.map(targetAttribute => {
      return attributes.find(attribute => {
        return attribute.name === targetAttribute;
      });
    });
  }
  
  render() {
    const { currentView } = this.state;
    
    const view = (currentView === 'menu' ? 
      <MainMenu 
        showFilterPlayground={this.toggleView}/> :
      <FilterPlayground 
        showMainMenu={this.toggleView}
        filter={this.getSelectedFilter()}
        attributes={this.getSelectedAttributes()}/>);
    return (
      <div>{ view }</div>
    );
  }
}

export default App;
