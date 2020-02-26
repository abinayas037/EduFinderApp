import React, { Component } from 'react';
import PlacesAutoComplete from 'react-places-autocomplete';
import {geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

class AutoComplete extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          address: '',
          latlng: null,
          venues: []
        }; 
        this.getVenues=this.getVenues.bind(this);
      }  
    handleChange = address => {
      this.setState({address});
        console.log(this.state.address)
    };
        handleSelect = address => {
          geocodeByAddress(address)
          .then(results => { 
            getLatLng(results[0])
            .then(value => {
              //let {lat,lng} = value;
              
              this.setState({
                latlng:value
                })
            }).then(venues =>{this.getVenues({venues})
            })
          })
         
        };
        getVenues = () => {
          console.log("inside",this.state.latlng)
           const endpoint = `https://api.foursquare.com/v2/venues/search?ll=${this.state.latlng.lat},${this.state.latlng.lng}&intent=browse&radius=10000&limit=10&categoryId=4bf58dd8d48988d10f941735,4bf58dd8d48988d110941735,5283c7b4e4b094cb91ec88d7&client_id=4NML4G43TBRQHPH204YA3ULCSMVH1KT0IU5WDRZFMH2LR2WI&client_secret=1RQHV341GD5DQ2CT0OFKIL1ELKE1VCA0WCK5EIYRPRV4D0O4&v=20200212`;
           /*const params = {
             client_id: "4NML4G43TBRQHPH204YA3ULCSMVH1KT0IU5WDRZFMH2LR2WI",
             client_secret: "1RQHV341GD5DQ2CT0OFKIL1ELKE1VCA0WCK5EIYRPRV4D0O4",
             catogeryId: "4bf58dd8d48988d10f941735,4bf58dd8d48988d110941735,5283c7b4e4b094cb91ec88d7",
             ll: "46.5343495,-84.3148643",
             v: "20200219"
          };*/
          axios.get(endpoint).then(response=>{
            //console.log('res',response)
            this.setState({venues: response.data.response.venues})
            console.log(this.state.venues[0])
          });
          
       }
        

     
    render() {
        return(
        <div> 
                    
          <div>
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
                  
                )
               })}
              
            </div>
          </div> 
        )}
       </PlacesAutoComplete>
       <ul>
           {this.state.venues.map(venue=> {
             return <li key = {venue.name} > {venue.name} Location: {venue.location.address} {venue.location.postalcode}
              {venue.location.cc} {venue.location.city} {venue.location.state} {venue.location.country}</li>
           })}
         </ul>
         </div>
       </div>

        )
    }

}

export default AutoComplete;