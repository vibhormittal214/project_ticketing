import React from 'react'
import Moment from 'moment';

export const GetTicketDetail = (props) => {
    let style = {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        width: "70%",
        overflow: "hidden",
        height: "auto"
    }
    Moment.locale('en');
    return (
        <>
            <div style={style} className="card text-center">
                <div style={{ backgroundColor: "teal" }} className="card-header">{props.TicketDetail.title}</div>
                <div className="card-body">
                    <h6 style={{ textAlign: "left" }} className="card-title"> Bucket: {props.TicketDetail.bucket_name}</h6>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b>Description:</b> {props.TicketDetail.description}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b>Created By: </b>{props.TicketDetail.ticket_created_by}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b> Assigned To:</b> {props.TicketDetail.developer_name}
                    </p>
                    <p style={{ textAlign: "left" }} className="card-text">
                        <b> Bucket Name:</b> {props.TicketDetail.bucket_name}
                    </p>
                </div>
                <div style={{ backgroundColor: "teal", color: "black" }} className="card-footer">{Moment(props.TicketDetail.creation_date).format("dddd, MMMM Do YYYY")}</div>
            </div>
        </>
    )
}
