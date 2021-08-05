import produce from "immer";

export default function reserve(state = [], action) {
    console.log("🚀 ~ file: reducer.js ~ line 2 ~ reserve ~ state", state)
    switch (action.type) {
        case 'ADD_RESERVE':
            //draft faz um clone do state
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;

                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1
                    })
                }
            });

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                //Caso o trip tivee mais de 1 na quantidade, remove a quantidade
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                }
            });

        case 'UPDATE_RESERVE':{
            if(action.amount <=0) return state;
            
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                //Caso o trip tivee mais de 1 na quantidade, remove a quantidade
                if (tripIndex >= 0) {
                    draft[tripIndex].amount = Number(action.amount)
                } else {
                    draft.splice(tripIndex, 1);
                }
            });
        }

        default:
            return state
    }

}