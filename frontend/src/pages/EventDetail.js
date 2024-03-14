import { useParams, Link } from "react-router-dom";

function EventDetailPage(){
    const params = useParams();
    return <>
    <h1>Tüm olaylar burda abi</h1>
    <p>EVENT ID: {params.eventId}</p>
    <p><Link to= ".." relative="path">Back</Link></p>
    </> 
}

export default EventDetailPage;