var redux = require('redux');
var reducer = (state=0, action)=>{
    if(action.type=='INC')
        return state+action.num;
    if(action.type=='DEC')
        return state-action.num;
    return state;
}
var createStore = redux.createStore;
var store = createStore(reducer);
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})
var inc_action = {type:'INC', num:1};
store.dispatch(inc_action);
store.dispatch(inc_action);
var dec_action = {type:'DEC', num:1};
store.dispatch(dec_action);
store.dispatch(dec_action);