
// Separando de forma mais limpa as Actions solicitadas para as alterações

//load
export function loadReserve(trip){
  return {
    type: 'LOAD_RESERVE',
    trip,
  }
}

//Add reserva
export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
      }
}
//Add reserva
export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
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
export function updateAmountRequest(id, amount){
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id, 
        amount
      }
}
//adiciona ou remove a quantidade da reserva
export function updateAmountSuccess(id, amount){
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id, 
        amount
      }
}