import { useState, useEffect } from 'react';
import { GetTicketDetail } from './GetTicketDetails.js'
import { SUBMIT_NEW_TICEKT } from '../env.js';
export const SubmitTheTicket = (props) => {
    const [ticketDetail, setTicketDetail] = useState(null);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.formDetails),
        };
        getData();

        // we will use async/await to fetch this data
        async function getData() {
            const response = await fetch(SUBMIT_NEW_TICEKT, requestOptions);
            const apiResponseData = await response.json();
            setTicketDetail(apiResponseData);
        }
    }, [props.formDetails]);
    return (
        <>{ticketDetail && <div><GetTicketDetail TicketDetail={ticketDetail[0]} /></div>}</>
    )
}