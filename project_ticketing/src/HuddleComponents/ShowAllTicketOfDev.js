import { useState, useEffect } from 'react';
import { AllTickets } from './AllTickets.js';
import { SHOW_ALL_TICKET_OF_DEV } from '../env.js';
export const ShowAllTicketofDev = (props) => {

    const [tickets, getAllTheTickets] = useState(null);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ devId: props.devId }),
        };
        getData();

        // we will use async/await to fetch this data
        async function getData() {
            const response = await fetch(SHOW_ALL_TICKET_OF_DEV, requestOptions);
            const apiResponseData = await response.json();
            getAllTheTickets(apiResponseData);
        }
    }, [props.devId]);
    return (
        <>
            {tickets && <AllTickets allTheTickets={tickets} showAllTicket={'all-tickets'} showIndividualTicket={props.showIndividualTicket} />}
        </>
    )
}
