import { GetAllProject } from '../HuddleComponents/GetAllProjects.js';
import { GetAllMemberDevelopers } from '../HuddleComponents/GetAllMemberDevelopers.js';
import { useState } from 'react';
export const NewTicktForm = (props) => {
    const [ticketTitle, setTitleInputValue] = useState("");
    const [descValue, setDescInputValue] = useState("");
    const [acceptVriteriaVal, setAcceptCriteriaInputValue] = useState("");
    const [devId, setInputDevId] = useState(1);
    const [bucketId, setInputBucketId] = useState(1);
    // Input Field handler
    let submitTicketApiInput = {
        "bucketId": null,
        "developerId": null,
        "desc": null,
        "acptCriteria": null,
        "title": null,
        "loggedInUser": null
    }
    const handleTicketTitle = (e) => {
        setTitleInputValue(e.target.value);
    };
    const handleDescInput = (e) => {
        setDescInputValue(e.target.value);
    };
    const handleAcptCriteriaValue = (e) => {
        setAcceptCriteriaInputValue(e.target.value);
    };
    const handleDevId = (e) => {
        setInputDevId(e.target.value);
    };
    const handleBucketId = (e) => {
        setInputBucketId(e.target.value);
    };
    function setSubmitTicketApiInput() {
        submitTicketApiInput['bucketId'] = bucketId;
        submitTicketApiInput['developerId'] = devId;
        submitTicketApiInput["desc"] = descValue;
        submitTicketApiInput["acptCriteria"] = acceptVriteriaVal;
        submitTicketApiInput["title"] = ticketTitle;
        submitTicketApiInput["loggedInUser"] = props.loggedInDevId;
    }
    // Reset Input Field handler
    const resetAllInputTitle = () => {
        let validation = performValidation();
        return validation;
    };
    const performValidation = () => {
        if (ticketTitle === "" || ticketTitle === undefined || ticketTitle === null || ticketTitle.length === 0) {
            return 'Please enter ticket title';
        } else if (descValue === "" || descValue === undefined || descValue === null || descValue.length === 0) {
            return 'Please enter description';
        } else if (acceptVriteriaVal === "" || acceptVriteriaVal === undefined || acceptVriteriaVal === null || acceptVriteriaVal.length === 0) {
            return 'Please enter acceptance criteria';
        }
        setTitleInputValue("");
        setDescInputValue("");
        setAcceptCriteriaInputValue("");
        setInputDevId(1);
        setInputBucketId(1);
        return null;
    }
    let formDivStyle = {
        overflow: "hidden",
        marginRight: "30px",
        marginTop: "15px"
    }
    let textAreaCss = {
        minHeight: "100px"
    }
    return (
        <div style={formDivStyle}>
            <div className="col-12" style={{ marginTop: "20px" }}>
                <label htmlFor="inputTitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="inputTitle" placeholder="Please enter the ticket title" value={ticketTitle} onChange={handleTicketTitle} />
            </div>
            <div className="col-12" style={{ marginTop: "20px" }}>
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <textarea style={textAreaCss} className="form-control" id="inputDescription" placeholder="Enter description here" value={descValue} onChange={handleDescInput} />
            </div>
            <div className="col-12" style={{ marginTop: "20px" }}>
                <label htmlFor="inputAcceptanceCriteria" className="form-label">Acceptance Criteria</label>
                <textarea style={textAreaCss} className="form-control" id="inputAcceptanceCriteria" placeholder="Enter acceptance criteria" value={acceptVriteriaVal} onChange={handleAcptCriteriaValue} />
            </div>
            <div className="col-md-4" style={{ width: "100%" }}>
                <div style={{ display: "inline-block", marginRight: "15px", marginTop: "20px" }}>
                    <div style={{ display: "inline-block", marginRight: "15px" }}>
                        <label htmlFor="inputAssignTo" className="form-label">Assign to</label></div>
                    <div style={{ display: "inline-block" }}> <select id="inputAssignTo" className="form-select" value={devId} onChange={handleDevId}>
                        <GetAllMemberDevelopers bucketNameDropdown={true} />
                    </select></div>
                </div>
                <div style={{ display: "inline-block", marginLeft: "15px", marginTop: "20px" }}>
                    <div style={{ display: "inline-block", marginRight: "15px" }}><label htmlFor="inputBucket" className="form-label">Bucket</label></div>
                    <div style={{ display: "inline-block" }}><select id="inputBucket" className="form-select" value={bucketId} onChange={handleBucketId}>
                        <GetAllProject bucketNameDropdown={true} />
                    </select></div>
                </div>
            </div>
            <div className="col-12" style={{ marginTop: "20px" }}>
                <button type="submit" className="btn btn-primary" onClick={() => { let validationInfo = resetAllInputTitle(); if (validationInfo != null) { alert(validationInfo) } else { setSubmitTicketApiInput(); props.submitTheForm(submitTicketApiInput); } }}>Submit</button>
            </div>

        </div>

    )
}