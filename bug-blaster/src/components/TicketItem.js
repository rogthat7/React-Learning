import React from 'react'

export default function TicketItem( { ticket,dispatch }) {
    const {  id, title, description, priority } = ticket // Replace with actual ticket data
    const priorityClass = {
        '1': 'priority-high',
        '2': 'priority-medium',
        '3': 'priority-low',
    }
    return (
    <div className={`ticket-item`}>
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}>
      </div>
        <div className="ticket-details">
            <h3 className="ticket-title">{title}</h3>
            <p className="ticket-description">{description}</p>
            <div className="ticket-actions">
            <button className='button' onClick={() => dispatch({ type: 'EDIT_TICKET', payload: ticket })}>Edit</button>
            <button className="button delete"  onClick={() => dispatch({ type: 'DELETE_TICKET', payload: { id } })}>Delete</button>
            </div>
        </div>
    </div>
  )
}
