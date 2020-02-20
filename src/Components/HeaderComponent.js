import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import restofinder from './Assets/Restfinder.jpg';


class HeaderComponent extends Component {
    render() {
        return(
            <React.Fragment>
            <Navbar dark>
                <div className="container">
                 <NavbarBrand href="/">Restaurant Finder App</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container-fluid">
                    <div className="row row-header">
                    <div className="RestIcon">
                      <img src= {restofinder} className="header-logo" alt="logo" height="100"/>
                     </div> 
                        <div className="col-12 col-sm-6">
                        <h2>Welcome To Our Restaurant Finder App</h2>
                        <p>Here You can find 3 types of cuisines nearby</p>
                        <ul>
                            <li>Indian Reastaurant</li>
                            <li>Italian Restaurant</li>
                            <li>Middle-East Restaurant</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </Jumbotron>
    </React.Fragment>

        );
    }
}

export default HeaderComponent;


/*const HeaderComponent  = () =>
    (
            <div className="Restlist">          
                    <div className={styles.header1}>
                        <img src= {restofinder} className="header-logo" alt="logo"/>
                    </div>
                    <div className={styles.header2}>
                        <h2>Wlecome To Our Restaurant Finder App</h2>
                        <p>Here You can find 3 types of cuisines nearby</p>
                        <ul>
                            <li>Indian Reastaurant</li>
                            <li>Italian Restaurant</li>
                            <li>Middle-East Restaurant</li>
                        </ul>
                    </div>
            </div>
        )
export default HeaderComponent;
-*/
