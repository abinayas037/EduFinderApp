import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import gradicon from './Assets/grad-icon.png';
import '../App.css';
import '../Page.css';

class HeaderComponent extends Component {

    
    render() {
        return(
            
            <Jumbotron>
                <div className="container-fluid">
                    <div className="Header row row-header">
                    <div className="RestIcon align-center col-12" height="70">
                      <img src= {gradicon} className="header-logo d-flex mr-3 align-center"  alt="logo" height="70"/>
                       
                     </div> 
                        <div>
                          <h2 className="content">Welcome To Our Educational Institutions Finder</h2>
                        </div>
                        
                        <p class="content1 align-self-center">Here You can a find list of Elementary and Highschools nearby</p>
                        
                    </div>
                </div>
            </Jumbotron>
    

        );
    }
}

export default HeaderComponent;
