import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { QRCodeSVG } from 'qrcode.react';

const TicketCard = ({ ticket }) => {
    const { user } = useAuth()

    return (
        <div className="border rounded-lg bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className="flex items-start justify-between p-4">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={ticket.image} />
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-gray-400 font-semibold">{ticket.eventName}</h4>
                    <p className="text-gray-300 text-sm">{ticket.description}</p>
                </div>
                <label htmlFor={ticket.id} className="btn text-gray-400 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Event Date And QR Code</label>

                <input type="checkbox" id={ticket.id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">{ticket.eventName}</h3>   
                        <p className="py-4">You Event Date:{ticket.date}</p>
                        <p>Please Scan that QR</p>
                        <QRCodeSVG
                        className=' mx-auto'
                            value={`${ticket.id},${user.uid}`}
                            size={128}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"L"}
                            includeMargin={false}
                        />
                    </div>
                    <label className="modal-backdrop" htmlFor={ticket.id}>Close</label>
                </div>
            </div>
            <div className="py-5 px-4  text-right">
                <Link to={`/events/${ticket.id}`} className="text-pink-600 hover:text-pink-500 text-sm font-medium">
                    View Details
                </Link>
            </div>
        </div >
    )
}

export default TicketCard