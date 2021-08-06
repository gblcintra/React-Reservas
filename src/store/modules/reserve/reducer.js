import produce from "immer";

export default function reserve(state = [], action) {


    switch (action.type) {
        //Carrega as reservas ao carregar a pagina
        case 'LOAD_RESERVE':
            return produce(state, draft => {
                draft.push({
                    ...action.trip
                });
            });

        case 'ADD_RESERVE_SUCCESS':
            //draft faz um clone do state
            return produce(state, draft => {
                draft.push(action.trip);
            });

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1);
                    localStorage.setItem('reserve', JSON.stringify(draft));
                };
            });

        case 'UPDATE_RESERVE': {
            // caso tenha s[o 1 na quantidade ele retorna o state
            if (action.amount <= 0) return state;

            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                if (tripIndex >= 0) {
                    //substitue o amount do array pela quantidade passada como parametro
                    draft[tripIndex].amount = Number(action.amount);
                    localStorage.setItem('reserve', JSON.stringify(draft));
                };
            });
        }

        default:
            return state
    }

}