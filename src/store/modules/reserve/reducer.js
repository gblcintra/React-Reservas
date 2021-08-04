export default function reserve(state = [], action){
// console.log("🚀 ~ file: reducer.js ~ line 2 ~ reserve ~ state", state)
    switch(action.type){
        case 'ADD_RESERVE':
            return [...state, action.trip];
        default:
            return state
    }
}