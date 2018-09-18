import React, { Component } from 'react';
import './App.css';
import MainMenu from './app/MainMenu.js';
import FilterPlayground from './app/FilterPlayground.js';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentView: 'menu' // 'menu' or 'filter'
    }
  }
  
  toggleView = () => {
    this.setState(prevState => {
      let newView;
      
      newView = prevState.currentView === 'menu' ? 'filter' : 'menu';
      
      return {
        currentView: newView
      };
    });
  }
  
  render() {
    const { currentView } = this.state;
    
    const view = (currentView === 'menu' ? 
      <MainMenu 
        showFilterPlayground={this.toggleView}/> :
      <FilterPlayground 
        showMainMenu={this.toggleView}/>);
      

    
    return (
      <div>{ view}</div>
    );
  }
}

export default App;
