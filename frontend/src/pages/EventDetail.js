import { useRouteLoaderData, Link, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>Olayin ayrintilari burda abi</h1>
      <EventItem event={data.event} />
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  //request. falan filan
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({params,request}){
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id, {
      method: request.method
  })

  if(!response.ok){
      throw json({message:'Could not delete  event.'},{status:500})
  } else {
      return redirect('/events');
  }

}