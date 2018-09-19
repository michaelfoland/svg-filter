import React, { Component } from 'react';
import './App.css';
import MainMenu from './app/MainMenu.js';
import FilterPlayground from './app/FilterPlayground.js';
import { filters } from './app/filters.js';


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

  getAllFilters() {
    return filters.map(filter => filter.name);
  }
  
  getSelectedFilter() {
    let targetFilter = filters.find(item => item.name === this.state.selectedFilter);
    
    return targetFilter;
  }

  getSelectedAttributes() {
    let targetFilter = this.getSelectedFilter().attributes;
    
    return targetFilter
    // return targetFilter.attributes.map(attribute => attribute.name);
  }
  
  render() {
    const { currentView } = this.state;
    
    const view = (currentView === 'menu' ? 
      <MainMenu 
        showFilterPlayground={this.toggleView}
        filters={this.getAllFilters()}/> :
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
