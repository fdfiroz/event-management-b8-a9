import { useEffect, useState } from "react"
import HomeEventCard from "./HomeEventCard/HomeEventCard"
import { Link } from "react-router-dom"


const EventSection = () => {
   
 const [events, setEvents] = useState([])
    useEffect(()=>{
        fetch('/data/events.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
  return (
    <section className="py-14 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Our Upcoming Events
                    </h3>
                    
                </div>
                <div className="mt-12">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {
                            events?.slice(0,4).map((event) => (<HomeEventCard key={event.id} event={event}></HomeEventCard>
                               
                            ))
                        }
                    </div>
                </div>
                <Link to={"/events"}><button className="btn btn-md btn-primary mt-8"> More Event</button></Link>
            </div>
        </section>
  )
}

export default EventSection