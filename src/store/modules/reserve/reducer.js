import produce from "immer";

export default function reserve(state = [], action) {
    // console.log("🚀 ~ file: reducer.js ~ line 2 ~ reserve ~ state", state)
    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);
                
                if(tripIndex >= 0){
                    draft[tripIndex].amount += 1;
                
                }else{
                    draft.push({
                        ...action.trip, 
                        amount:1
                    })
                }
            });

        default:
            return state
    }
}