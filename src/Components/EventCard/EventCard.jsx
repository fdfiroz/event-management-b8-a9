import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
    const { id, image, eventName, description, date, time, type, location, speakers, ticketPrice} = event;
  return (
    <div   className="max-w-screen-lg mx-auto border flex flex-col lg:flex-row overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className='w-11/12 lg:w-4/12 mx-auto'>
        <img className="object-fill object-center w-full h-64" src={image} alt="avatar"/>

        <div className="flex items-center px-6 py-3 bg-gray-900">

        <h1 className="mx-3 text-xs lg:text-lg font-semibold text-white">{type}</h1>
        </div>
    </div>

    <div className="text-start my-auto px-6 py-4">
        <h1 className="text-sm lg:text-xl font-semibold text-gray-800 dark:text-white">{eventName}</h1>
        <p className="py-2 text-sm lg:text-lg text-gray-700 dark:text-gray-400">{description}</p>
        <p className='text-xs lg:text-lg'>Location: <span>{location}</span></p>
        <p className='font-bold text-xs lg:text-lg'>Date: <span>{date}</span></p>
        <p className='mb-4 text-xs lg:text-lg'>Time: <span>{time}</span></p>
        <div className='flex gap-4'>
        {
            speakers?.map((speaker, index) => {
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
    </div>
    <div className='mx-auto my-auto pb-4 lg:pr-4'>
        <h3 className='text-base lg:text-2xl mb-4'>Ticket Price: <span>{ticketPrice}</span></h3>
        <Link to={`/events/${id}`}>

        <button className='btn btn-sm rounded lg:btn-md btn-success'>View Details </button>
        </Link>
    </div>
</div>
  )
}

export default EventCard