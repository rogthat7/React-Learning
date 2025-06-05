import React, {useEffect, useState} from 'react';
export default function TicketForm({state, dispatch}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    useEffect(() => {
        if (state.editingTicket) {
            setTitle(state.editingTicket.title);
            setDescription(state.editingTicket.description);
            setPriority(state.editingTicket.priority);
        } else {
            clearForm();
        }
    }, [state.editingTicket]);

    const priorityOptions = [
        { value: '3', label: 'Low' },
        { value: '2', label: 'Medium' },
        { value: '1', label: 'High' },
    ];
    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('3');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketData = {
          id: state.editingTicket ? state.editingTicket.id : new Date().toISOString(),
          title: title,
          description: description,
          priority: priority,
        };
        if (!title || !description) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Ticket submitted:', ticketData);
        dispatch({ type: state.editingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET', payload: ticketData });
        clearForm();
    };
    const handleCancel = () => {
        dispatch({ type: 'CANCEL_EDIT' });
        clearForm();
    }
  return (
    <div className="container">
      <h1>Bug Blaster</h1>
      <form className='ticket-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="form-control form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" className="form-control form-input" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <fieldset className='priority-fieldset'>  
            <legend>Priority</legend> 
            <select id="priority" className="form-control form-input" value={priority} onChange={(e) => setPriority(e.target.value)}>
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
            </fieldset>
          
        </div>
        <button type="submit" className="btn btn-primary button">Submit</button>
        {state.isEditing && (
          <button type="button" className="btn btn-secondary button secondary" onClick={handleCancel}>Cancel</button>
        )}
      </form>
    </div>
  );
}