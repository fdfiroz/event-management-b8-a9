
import { useLoaderData } from 'react-router-dom'
import EventCard from '../../Components/EventCard/EventCard'
const Events = () => {
    const events = useLoaderData()
    
  return (
    <div className='grid grid-cols-1 gap-8'>
        {
            events?.map((event) =>  <EventCard key={event.id} event={event}></EventCard>
            )
        }
       
    </div>
  )
}

export default Events