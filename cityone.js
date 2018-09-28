import React from 'react';
import{connect} from 'react-redux';

var _this;

class CityList extends React.Component{
    constructor(props){
        super(props);
        _this=this;
    }
    render(){
        var cts = this.props.cities.map((c)=>{
            return(
                <p>{c}</p>
            )
        })
        return(
            <div>
                <button onClick={this.props.clickHandler}>Add City</button>
                <input type="text" ref="city"></input>
                <hr/>
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
var mapDispatchToProps = (dispatch)=>{
    return{
        clickHandler:(event)=>{
            var addAction = {
                type:'ADD', city:_this.refs.city.value
            }
            dispatch(addAction);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CityList);