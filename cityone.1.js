import React from 'react';
import{connect} from 'react-redux';

class CityList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var cts = this.props.cities.map((c)=>{
            return(
                <p>{c}</p>
            )
        })
        return(
            <div>
                {cts}
            </div>
        )
    }
}

var mapStateToProps = (state)=>{
    return{
        cities:state.cities
    }
}
export default connect(mapStateToProps)(CityList);