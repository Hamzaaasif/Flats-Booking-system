import React, {Component} from 'react'  
import FlatDetails from '../Components/FlatDetails'



class flatsDetails extends Component
{
  render(){
    const wrapper = {
    marginTop: "40px",
    marginBottom: "40px",
    marginLeft: "300px",
    marginRight: "40px"
    };

    return(
      <div>
        <FlatDetails
        styles={wrapper}
        />
      </div>
    )
  }
}

export default flatsDetails;