import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import axios from 'axios';
import './App.css';
import PlacesAutoComplete from 'react-places-autocomplete';

import { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { address: ''}; 
  }   

  handleChange = address => {
    this.setState({ address });
  };

  

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latlng => console.log('success', latlng))
      .catch(error => console.error('Error', error));
  };
  foursqaure(latLng) {
    axios.get  = ('https://api.foursquare.com/v2/venues/search?ll={latLng}&intent=browse&radius=10000&limit=10&categoryId=4bf58dd8d48988d10f941735,4bf58dd8d48988d110941735,5283c7b4e4b094cb91ec88d7&client_id=4NML4G43TBRQHPH204YA3ULCSMVH1KT0IU5WDRZFMH2LR2WI&client_secret=1RQHV341GD5DQ2CT0OFKIL1ELKE1VCA0WCK5EIYRPRV4D0O4&v=20200212')
 
}

  render() {   
   return (
      <div className="Text-inp">    
         <HeaderComponent/>
      <div className="container">
        <div className="row row-header">
         <form className="PlacesAutoComplete">
      <PlacesAutoComplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="container"> 
          <input
              {...getInputProps({
                placeholder: 'Type your location',
                className: 'location-search-input',     
              })}
            />
            
            
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div> 
        )}
       </PlacesAutoComplete>
      </form>  
     </div>
    </div>
  </div>
    );
  
  }
};

export default LocationSearchInput;
