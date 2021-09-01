import React from 'react'
import { useState, useEffect } from 'react';
import { AllTickets } from './AllTickets.js';
import { NoDataFoundComp } from './ShowNoDataFound.js'
import { SEARCH_TICKET_BY_TICKET_ID } from '../env.js';
export const SearchTicketById = (props) => {
    const [ticketData, setTicketData] = useState(null);
    let ticketId = props.ticketId
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchKeyword: ticketId }),
        };
        getData();

        // we will use async/await to fetch this data
        async function getData() {
            const response = await fetch(SEARCH_TICKET_BY_TICKET_ID, requestOptions);
            const apiResponseData = await response.json();
            if (apiResponseData.length > 0) {
                setTicketData(apiResponseData);
            } else {
                setTicketData(null)
            }
        }
    }, [ticketId]);
    return (
        <>
            {ticketData === null && <NoDataFoundComp />}
            {ticketData !== null && <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")', height: "100%" }}><AllTickets allTheTickets={ticketData} showAllTicket={'all-tickets'} showIndividualTicket={props.showIndividualTicket} /></div>}
        </>
    )
}
