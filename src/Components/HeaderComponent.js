import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import restofinder from './Assets/Restfinder.jpg';
import '../App.css';
import '../Page.css';

class HeaderComponent extends Component {

    
    render() {
        return(
            
            <Jumbotron>
                <div className="container-fluid">
                    <div className="Header row row-header">
                    <div className="RestIcon align-center col-12" height="70">
                      <img src= {restofinder} className="header-logo d-flex mr-3 align-center"  alt="logo" height="70"/>
                       
                     </div> 
                        <div>
                          <h2 className="content">Welcome To Our Restaurant Finder App</h2>
                        </div>
                        
                        <p class="content1 align-self-center">Here You can find 3 types of cuisines nearby</p>
                        <ul class="content1">
                            <li>Indian Reastaurant</li>
                            <li>Italian Restaurant</li>
                            <li>Middle-East Restaurant</li>
                        </ul>
                        
                    </div>
                </div>
            </Jumbotron>
    

        );
    }
}

export default HeaderComponent;
