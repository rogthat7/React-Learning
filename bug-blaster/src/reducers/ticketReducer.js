export default function ticketReducer(state, action) {
  switch (action.type) {
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...(state.tickets || []), action.payload],
      };
    case 'DELETE_TICKET':
      if(state.isEditing && state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          isEditing: false,
          editingTicket: null,
          tickets: (state.tickets || []).filter(ticket => ticket.id !== action.payload.id),
        };
      }
      return {
        ...state,
        tickets: (state.tickets || []).filter(ticket => ticket.id !== action.payload.id),
      };
    case 'UPDATE_TICKET':
      return {
        ...state,
        tickets: (state.tickets || []).map(ticket =>
          ticket.id === action.payload.id ? { ...ticket, ...action.payload } : ticket
        ),
      };
    case 'EDIT_TICKET':
      return {
        ...state,
        isEditing: true,
        editingTicket: action.payload,
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        isEditing: false,
        editingTicket: null,
      };
    case 'SET_SORTING_PREFERENCE':
      return {
        ...state,
        sortingPreference: action.payload,
      };
    default:
      return state;
  }
}