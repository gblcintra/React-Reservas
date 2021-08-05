
// Separando de forma mais limpa as Actions solicitadas para as alterações

//Add reserva
export function addReserve(trip){
    return {
        type: 'ADD_RESERVE',
        trip
      }
}

//Remove a reserva
export function removeReserve(id){
    return {
        type: 'REMOVE_RESERVE',
        id
      }
}

//adiciona ou remove a quantidade da reserva
export function updateAmountReserve(id, amount){
    return {
        type: 'UPDATE_RESERVE',
        id, 
        amount
      }
}