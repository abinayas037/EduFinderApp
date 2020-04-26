import React, { Component } from 'react';
import allbutton from './Assets/AllButton.jpg';
import InButton from './Assets/Indian.jpg';
import ItalButton from './Assets/Italian.jpg';
import MidButton from './Assets/MiddleEast.jpg';


class AllButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            venue:[]
        }
    }
    changeHandler=(event)=> {
        this.setState({venue:event.target.value})
    }
    render() {
        return(
      <div class="imagebuttons">
           <div class="row">
               
               <div class="image1 col">
                   <button>
                    <img src={allbutton} alt="logo" height="50" width="50">
                     </img>    
                    </button>  
                    </div>   
                <div class="image2 col">
                    <button>
                     <img src={InButton} alt="logo" height="50" width="50" >              
                     </img>  
                     </button>
                </div>   
                <div class="image3 col">
                    <button>
                        <img src={ItalButton} alt="logo" height="50" width="50">
                        </img>
                    </button>
                </div>  
                <div class="image4 col">
                    <button> 
                        <img src={MidButton} alt="logo" height="50" width="50">
                        </img>
                    </button>
                    
                    
                </div>    
              
            </div>  
        </div>
        )
    }
}
export default AllButton;
