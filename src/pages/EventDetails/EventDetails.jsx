import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { FaLocationDot, FaCalendarDay, FaClock, FaCircleDollarToSlot } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast";


const EventDetails = () => {
  const {id} = useParams()
  const idInt = parseInt(id);
  const events = useLoaderData()
  const [event , setEvent] = useState({})
  const {user} = useAuth()
  console.log(user.email)
  console.log(event)
  useEffect(() => {
    const findEvent =  events?.find((event) => event.id === idInt)
    setEvent(findEvent)
  }, [])

  const handelTicket = () =>{
    console.log('ticket')
    const addedTicket = [];

    const ticketList = JSON.parse(localStorage.getItem(`${user.email}`));

    if (!ticketList) {
      addedTicket.push(event);
      localStorage.setItem(`${user.email}`, JSON.stringify(addedTicket));
      toast.success("Products added successfully!");
    }    
    else {
      const isExits = ticketList.find((ticket) => ticket.id === idInt);
      if (!isExits) {

        addedTicket.push(...ticketList, event);
        localStorage.setItem(`${user.email}`, JSON.stringify(addedTicket));
        toast.success("Products added successfully!");
       
      } else {
        toast.error("Error! No duplicate !");
      }

  }
  }
  
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black py-6 sm:py-8 lg:py-12 text-left">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    <div className="w-full h-96 mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img src={event.image} loading="lazy" alt="" className="h-full w-full  object-fill object-center" />
      <div className="flex items-center px-6 py-3 bg-gray-900">
      <h1 className="mx-3 text-xs lg:text-lg font-semibold text-white">{event.type}</h1>
    </div>
    </div>

    <h2 className="mb-2 text-xl font-bold  text-neutral-950 sm:text-2xl md:mb-4">{event.eventName}</h2>

    <p className="text-justify text-neutral-950 text-opacity-70 text-base font-normal  sm:text-lg">{event.description}</p>
    <h3 className="text-base font-bold text-neutral-950 sm:text-xl md:text-2xl">Speakers</h3>
    <div className='flex gap-4'>
        {
            event?.speakers?.map((speaker, index) => {
                return (
                    <div key={index} className='text-center '>
                        <div className="avatar">
                            <div className="w-8 lg:w-16 rounded-full">
                                 <img src={speaker.image} />
                            </div>
                        </div>
                     <p className='text-xs lg:text-sm text-white'>{speaker.name}</p>
                    </div>
                )
            })
        }
    </div>
    <div className='flex mt-4 mb-2 place-items-center'><FaLocationDot></FaLocationDot><span className="ml-1">{event.location}</span></div>
    <div className='flex  mb-2 place-items-center'><FaCalendarDay></FaCalendarDay><span className="mx-1">{event.date}</span> <FaClock className="ml-4"></FaClock><span className="ml-1">{event.time}</span></div>
    <div className='flex  mb-2 place-items-center'><FaCircleDollarToSlot></FaCircleDollarToSlot><span className="mx-1">{event.ticketPrice}/per Ticket</span></div>
  <button onClick={handelTicket} className="btn btn-primary bg-pink-600 hover:bg-pink-700 btn-wide">Buy Now</button>
  </div>

</div>
  )
}

export default EventDetails