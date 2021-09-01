import React from 'react'
import { Ticket } from "./Ticket";
import { useState } from 'react';
import { NoDataFoundComp } from './ShowNoDataFound.js'
export const AllTickets = (props) => {
    const [renderAllTicket] = useState(props.showAllTicket)
    return (
        <div>
            {renderAllTicket === 'all-tickets' && (
                <div className="container">
                    {props.allTheTickets.length > 0 ? <h3 style={{ marginRight: "auto" }} className="text-center my-3" >All available ticket</h3> : ""}
                    {props.allTheTickets.length === 0 ? <><h3 className="text-center my-3">No Data Found</h3><NoDataFoundComp /></> :
                        props.allTheTickets.map((allTickets) => {
                            return <div key={allTickets.ticket_id}><Ticket allTickets={allTickets} showIndividualTicket={props.showIndividualTicket} /></div>
                        })
                    }
                </div>)
            }
        </div>
    )
}
