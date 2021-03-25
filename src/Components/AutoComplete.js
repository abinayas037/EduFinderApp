import React, { Component } from "react";
 import PlacesAutoComplete from "react-places-autocomplete";
import { Jumbotron, Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import allbutton from './Assets/AllEdu.png';
import elembutton from './Assets/elementary.png';
import hsclbutton from './Assets/HighSchool.png';
import axios from "axios";
import "../App.css";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      latlng: null,
      venues: [],
      value: "",
      schoolType: ""
    };
    this.getVenues = this.getVenues.bind(this);
  }
  handleChange = address => {
    this.setState({ address });
    console.log(this.state.address);
  };
  handleSelect = address => {
    geocodeByAddress(address).then(results => {
      getLatLng(results[0])
        .then(value => {
          //let {lat,lng} = value;

          this.setState({
            latlng: value
          });
        })
        .then(venues => {
          this.getVenues({ venues });
        });
    });
  };
  getVenues = () => {
    console.log("inside", this.state.latlng);
    const endpoint = `https://api.foursquare.com/v2/venues/search?ll=${this.state.latlng.lat},${this.state.latlng.lng}&intent=browse&radius=10000&limit=10&categoryId=52e81612bcbc57f1066b7a45,4f4533804b9074f6e4fb0105,4bf58dd8d48988d13d941735&client_id=4NML4G43TBRQHPH204YA3ULCSMVH1KT0IU5WDRZFMH2LR2WI&client_secret=1RQHV341GD5DQ2CT0OFKIL1ELKE1VCA0WCK5EIYRPRV4D0O4&v=20200212`;
    axios.get(endpoint).then(response => {
      //console.log('res',response)
      this.setState({ venues: response.data.response.venues });
      console.log(this.state.venues[0]);
    });
  };

  render() {
    return (
      <div className="autocompleteList">
        <Jumbotron>
          <PlacesAutoComplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div className="container">
                <input
                  type="text"
                  align="center"
                  {...getInputProps({
                    placeholder: "Type your location",
                    className: "location-search-input"
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";

                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };

                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
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
        </Jumbotron>
        {/* <AllButton/> */}
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">   
            <div class="imgicon" role="group" aria-label="First group">
              <Button onClick={ ()=> { 
              this.setState({
                schoolType: ""
              });
              this.render() 
              }}><img src={allbutton} alt="logo" height="50" width="50"/>All</Button>
            </div>
            <div class="imgicon" role="group" aria-label="Second group">
              <Button onClick={ ()=> { 
              this.setState({
                schoolType: "4f4533804b9074f6e4fb0105"
              });
              this.render() 
              }}><img src={elembutton} alt="logo" height="50" width="50"/>Elementary</Button>
            </div>
            <div class="imgicon" role="group" aria-label="Third group">
              <Button onClick={ ()=> { 
              this.setState({
                schoolType: "4bf58dd8d48988d13d941735"
              });
              this.render() 
              }}><img src={hsclbutton} alt="logo" height="50" width="50"/>Highschool</Button>
            </div>  
          </div>
      <div class="cardDisplay">
            {
            
            this.state.schoolType !== "" 
            
            ?
      
            this.state.venues
            .filter(venue => venue.categories[0].id === this.state.schoolType)
            .map(venue => {
              const catID = venue.categories[0].id;
              let colorID = catColors.filter( cat => cat.id === catID);
              colorID = colorID[0] !=null ? colorID[0].backgroundColor : '#B1E5F2';
              return (  
            
              <div class="card">
                <Card key={venue.name} style={{ "backgroundColor": colorID}}>
                  <div className="displayarea">
                    <CardBody class="card-group-item-success">
                      <CardTitle> {venue.name} </CardTitle>
                      <CardText>                  
                        {venue.location.address} {venue.location.postalcode}
                        {venue.location.cc} {venue.location.city}
                        {venue.location.state} {venue.location.country}
                      </CardText>
                    </CardBody>
                  </div>
                </Card>
              </div>
            );
          })

            :

            this.state.venues
            .map(venue => {
              const catID = venue.categories[0].id;
              let colorID = catColors.filter( cat => cat.id === catID);
              colorID = colorID[0] !=null ? colorID[0].backgroundColor : '#B1E5F2';
              return ( 
                <div class="card"> 
                  <Card key={venue.name} style={{ "backgroundColor": colorID}}>
                    <div className="displayarea">
                      <CardBody class="card-group-item-success">
                        <CardTitle> {venue.name} </CardTitle>
                        <CardText>                  
                          {venue.location.address} {venue.location.postalcode}
                          {venue.location.cc} {venue.location.city}
                          {venue.location.state} {venue.location.country}
                        </CardText>
                      </CardBody>
                    </div>
                  </Card>
                </div>
            
            );
          })

      }
    </div>
  </div>
    );
  }
}

const catColors = [
  {id: '52e81612bcbc57f1066b7a45', backgroundColor: '#F6E27F'}, //pre school
  {id: '4f4533804b9074f6e4fb0105', backgroundColor: '#DDD92A'}, //elementary school
  {id: '4bf58dd8d48988d13d941735', backgroundColor: '#FAFDF6'}, //High school
  // {id: 'all', backgroundColor: '#B1E5F2'}, //all
];


export default AutoComplete;
