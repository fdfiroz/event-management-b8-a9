import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { QRCodeSVG } from 'qrcode.react';

const TicketCard = ({ ticket }) => {
    const { user } = useAuth()

    return (
        <div className="border rounded-lg">
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
                <label for={ticket.id} class="btn text-gray-400 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Event Date</label>

                <input type="checkbox" id={ticket.id} class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="text-lg font-bold">{ticket.eventName}</h3>
                        <p class="py-4">You Event Date:{ticket.date}</p>
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
                    <label class="modal-backdrop" for={ticket.id}>Close</label>
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