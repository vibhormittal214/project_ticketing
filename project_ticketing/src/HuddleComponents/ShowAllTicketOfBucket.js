import { useState, useEffect } from 'react';
import { AllTickets } from './AllTickets.js';
import { SEARCH_ALL_TICKET_OF_BUCKET } from '../env.js';
export const ShowAllTicketFromBucket = (props) => {
  const [tickets, getAllTheTickets] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bucketId: props.bucketId }),
    };
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(SEARCH_ALL_TICKET_OF_BUCKET, requestOptions);
      const apiResponseData = await response.json();
      getAllTheTickets(apiResponseData);
    }
  }, [props.bucketId]);
  return (
    <>
      {tickets && <AllTickets allTheTickets={tickets} showAllTicket={'all-tickets'} showIndividualTicket={props.showIndividualTicket} />}
    </>
  )
}
