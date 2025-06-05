export default function sortTickets(tickets, sortingPreference) {
  if (!tickets || tickets.length === 0) return tickets;

  const sortedTickets = [...tickets];

  switch (sortingPreference) {
    case 'High to Low':
      sortedTickets.sort((a, b) => a.priority - b.priority);
      break;
    case 'Low to High':
      sortedTickets.sort((a, b) => b.priority - a.priority);
      break;
    case 'Newest First':
      sortedTickets.sort((a, b) => new Date(b.id) - new Date(a.id));
      break;
    case 'Oldest First':
      sortedTickets.sort((a, b) => new Date(a.id) - new Date(b.id));
      break;
    default:
        sortedTickets.sort((a, b) => a.priority - b.priority);
      break;
  }

  return sortedTickets;
}