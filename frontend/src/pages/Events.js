import { Link } from "react-router-dom";

function EventsPage() {
  const EVENTS = [
    { id: "e1", title: "Patlama sabret" },
    { id: "e2", title: "Gün dogmadan Neler dogar" },
    { id: "e3", title: "Goz yasimda saklisin" },
  ];

  return (
    <>
      <h1>Tüm olaylar burda abi</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;