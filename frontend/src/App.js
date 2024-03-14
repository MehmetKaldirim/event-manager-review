
import { RouterProvider,createBrowserRouter } from "react-router-dom";

import HomePage from './pages/Home';
import EventsPage from './pages/Events.js';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';


const router = createBrowserRouter([
  {path : '/',
  element : <RootLayout />,
  children: [
    {path: '', element: <HomePage/>},
    {path: 'events', element: <EventsPage/>},
    {path: 'events/:eventId', element: <EventDetailPage/>},
    {path: 'newEvent', element: <NewEventPage/>},
    {path: 'editEvent', element: <EditEventPage/>},
    
  ]
}
])


function App() {
  return <RouterProvider router={router}/>;
}

export default App;