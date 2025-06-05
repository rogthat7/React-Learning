import './App.css';
import './styles.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import { useReducer } from 'react';
import TicketList from './components/TicketList';
import sortTickets from './utils/sortingUtilities'; // Assuming you have a utility function for sorting tickets

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    isEditing: false,
    sortingPreference: 'High to Low', // Default sorting by priority
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTickets(state.tickets, state.sortingPreference);
  return (
    <div className="App">
      <div className="container">
        <TicketForm state={state} dispatch={dispatch} />
        <div className='results'>
        <h2 className="ticket-list-title">Ticket List</h2>
        <div className="sorting-controls">
          <label>Sort by:</label>
          <select
            value={state.sortingPreference}
            onChange={(e) => dispatch({ type: 'SET_SORTING_PREFERENCE', payload: e.target.value })}
          >
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>
        {state.error && <div className="error-message">{state.error}</div>}
        {state.tickets.length === 0 ? (
          <div className="no-tickets-message">No tickets available.</div>
        ) : (
          <TicketList tickets={sortedTickets} dispatch={dispatch} />
        )}
        </div>
        
      </div>
    </div>
  );
}

export default App;
