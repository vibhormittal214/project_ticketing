import React from 'react'
import Moment from 'moment';
export const Ticket = (props) => {
    let style = {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        width: "70%",
    }
    return (
        <>

            <div style={style} className="card text-center">
                <div style={{ backgroundColor: "teal" }} className="card-header">{props.allTickets.title}</div>
                <div className="card-body">
                    <h6 style={{ textAlign: "left" }} className="card-title"> Bucket: {props.allTickets.bucket_name}</h6>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b>Description:</b> {props.allTickets.description}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b>Created By: </b>{props.allTickets.ticket_created_by}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b> Assigned To:</b> {props.allTickets.developer_name}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b> Bucket Name:</b> {props.allTickets.bucket_name}
                    </p>
                    <button className="btn btn-primary" onClick={() => { props.showIndividualTicket(props.allTickets) }}>View Details</button>
                </div>
                <div style={{ backgroundColor: "teal" }} className="card-footer">{Moment(props.allTickets.creation_date).format("dddd, MMMM Do YYYY")}</div>
            </div>
        </>
    )
}
