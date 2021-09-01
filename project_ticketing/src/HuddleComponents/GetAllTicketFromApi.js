import { useState, useEffect } from 'react';
import { AllTickets } from './AllTickets.js';
import { GET_ALL_TICKET_FROM_API } from '../env.js';
export const GetAllTickets = (props) => {
  const [tickets, getAllTheTickets] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(GET_ALL_TICKET_FROM_API, requestOptions);
      const apiResponseData = await response.json();
      getAllTheTickets(apiResponseData);
    }
  }, []);
  return (
    <>
      {tickets && <AllTickets allTheTickets={tickets} showAllTicket={props.showAllTickets} showIndividualTicket={props.showIndividualTicket} />}
    </>
  )
}
