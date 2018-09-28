
var initialState={num:0};
export const reducer = (state=initialState, action)=>{
    if(action.type=='INC'){
        return state.num+action.num;
    }
    if(action.type=='DEC'){
        return state.num-action.num;
    }
    return state;
}