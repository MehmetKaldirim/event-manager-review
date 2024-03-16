import EventForm from "../components/EventForm";

function NewEventPage() {
  return (
    <>
      <h1>Yeni haberlerin mi var...! Ekle o zaman...</h1>
      <EventForm method = 'post' />
    </>
  );
}

export default NewEventPage;


