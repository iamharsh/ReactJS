import React from 'react';
import{connect} from 'react-redux';

class IncDec extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var cts = this.props.num;
        return(
            <div>
                <button onClick={this.props.incHandler}>+</button>
                <h3>{cts}</h3>
                <button onClick={this.props.decHandler}>-</button>
            </div>
        )
    }
}

var mapStateToProps = (state)=>{
    return{
        num:state.num
    }
}
var mapDispatchToProps = (dispatch)=>{
    return{
        incHandler:(event)=>{
            var incAction = {
                type:'INC', num:1
            }
            dispatch(incAction);
        },
        decHandler:(event)=>{
            var decAction = {
                type:'DEC', num:1
            }
            dispatch(decAction);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncDec);