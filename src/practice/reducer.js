const initialState={status:''}
function reducer(state=initialState,action){
    switch(action.type){
       case 'setStatus':
           return {...state,status:action.payload};
       default:
           return state;
    }
}
export default reducer;