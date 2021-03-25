import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import AutoComplete from './Components/AutoComplete';

import './App.css';
import './Page.css';
//import InButton from './Components/InButton';



class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      venues: null
    }; 
  }  
    

  render() {   
    console.log("bye",this.state.latlng)
   return (
      <div className="head">    
         <HeaderComponent/>     
         <AutoComplete/> 
         
         
       
        
       </div>
         
         
    
      
    );
  }
};

export default LocationSearchInput;
