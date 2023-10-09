
import { useLoaderData } from 'react-router-dom'
import EventCard from '../../Components/EventCard/EventCard'
import { Helmet } from 'react-helmet-async';

const Events = () => {
    const events = useLoaderData()
    
  return (
    <>
    <Helmet>
      <title>Events List</title>
    </Helmet>
    <div className='grid grid-cols-1 gap-8 my-8'>
        {
            events?.map((event) =>  <EventCard key={event.id} event={event}></EventCard>
            )
        }
       
    </div>
    </>
  )
}

export default Events