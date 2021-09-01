import React from 'react'
import { useState } from 'react';
import { GetAllProject } from '../HuddleComponents/GetAllProjects.js';
import { GetAllTickets } from '../HuddleComponents/GetAllTicketFromApi.js';
import { NewTicktForm } from '../HuddleComponents/GetNewTicketForm.js';
import { GetAllMemberDevelopers } from '../HuddleComponents/GetAllMemberDevelopers.js';
import { GetTicketDetail } from './GetTicketDetails.js'
import { ShowAllTicketFromBucket } from '../HuddleComponents/ShowAllTicketOfBucket.js';
import { ShowAllTicketofDev } from '../HuddleComponents/ShowAllTicketOfDev';
import { SubmitTheTicket } from '../HuddleComponents/SubmitTheNewTicket';
export default function LeftNav(props) {
    const [whichTabToRender, renderData] = useState('all-tickets');
    const [individualTicketDetail, setTicketDetail] = useState(null);
    const [bucketId, setProjectBucketId] = useState(null);
    const [devId, setDeveloperId] = useState(null);
    const [formAPiInput, setFormInput] = useState(null);
    const triggershowIndividualTicket = (currentTicket) => {
        setTicketDetail(currentTicket)
        renderData('individual')
    }
    const triggerSubmitForm = (apiInput) => {
        setFormInput(apiInput);
        renderData('submit-ticket')
    }
    const triggerShowTicketFromBucket = (bucketId) => {
        setProjectBucketId(bucketId)
        renderData('bucket-tickets')
    }
    const triggerShowTicketFromdev = (devId) => {
        setDeveloperId(devId)
        renderData('developer-tickets')
    }
    const setAllTicketState = () => {
        renderData('all-tickets');
    }
    const setCreateTicketState = () => {
        renderData('create-ticket');
    }
    const setMemberState = () => {
        renderData('all-members');
    }
    const setAllBucketsState = () => {
        renderData('all-buckets');
    }
    let outerDivCss = {
        display: "flex",
        position: "relative",
        height: "600px",
        overflowY: "scroll",
        width: "100",
        backgroundImage: 'url("https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")'
    }
    let leftNavPartCss = {
        borderRight: "2px solid grey",
        position: "sticky",
        flex: "1 0 10%",
        top: "0",
        display: "flex",
        alignItems: "center",
        height: "100%"
    }
    let leftNavButtonsCss = {
        marginTop: "50px",
        marginRight: "5px"
    }
    let letRightDivCss = {
        position: "relative",
        right: "0",
        flex: "1 0 90%",
    }
    return (
        <div style={outerDivCss} className="d-flex align-items-start">
            <div style={leftNavPartCss} className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button style={leftNavButtonsCss} className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => { setAllTicketState() }}>All tickets</button>
                <button style={leftNavButtonsCss} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => { setCreateTicketState() }}>Create ticket</button>
                <button style={leftNavButtonsCss} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => { setMemberState() }}>Members</button>
                <button style={leftNavButtonsCss} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => { setAllBucketsState() }}>Buckets Available</button>
            </div>
            {whichTabToRender === 'all-tickets' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div><GetAllTickets showAllTickets={whichTabToRender} showIndividualTicket={triggershowIndividualTicket} /></div>
            </div>}
            {whichTabToRender === "individual" && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div><GetTicketDetail TicketDetail={individualTicketDetail} /></div>
            </div>}
            {whichTabToRender === 'create-ticket' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><NewTicktForm submitTheForm={triggerSubmitForm} loggedInDevId={props.loggedInDevId} /></div>
            </div>}
            {whichTabToRender === 'all-members' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><GetAllMemberDevelopers showAllTicketOfDev={triggerShowTicketFromdev} /></div>
            </div>}
            {whichTabToRender === 'all-buckets' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><GetAllProject showAllTicketOfBucket={triggerShowTicketFromBucket} /></div>
            </div>}
            {whichTabToRender === 'bucket-tickets' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><ShowAllTicketFromBucket bucketId={bucketId} showIndividualTicket={triggershowIndividualTicket} /></div>
            </div>}
            {whichTabToRender === 'developer-tickets' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><ShowAllTicketofDev devId={devId} showIndividualTicket={triggershowIndividualTicket} /></div>
            </div>}
            {whichTabToRender === 'submit-ticket' && <div style={letRightDivCss} className="tab-content" id="v-pills-tabContent">
                <div ><SubmitTheTicket formDetails={formAPiInput} /></div>
            </div>}
        </div>
    )
}
