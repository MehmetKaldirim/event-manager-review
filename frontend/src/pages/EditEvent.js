import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>Haber dediginin kici basi oynar, editle </h1>
      <EventForm event={data.event} />
    </>
  );
}

export default EditEventPage;
