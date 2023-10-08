import { Link } from "react-router-dom";

const HomeEventCard = ({ event }) => {
    const { id, image, eventName, description, date, time } = event;
    return (
        <>
            <Link to={`/events/${id}`} className="flex flex-row-reverse bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {eventName}
                    </h3>
                    <p className="mt-1 text-gray-800 dark:text-gray-400">
                        {description}
                    </p>
                    <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
                        Event Date: {date}
                    </p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                        Event time: {time}
                    </p>
                </div>
                <div className='w-10/12 h-full inline-flex rounded-xl'>
                <img className="object-center rounded-xl " src={image} alt="Image Description" />
                </div>
            </Link>
        </>
    )
}

export default HomeEventCard