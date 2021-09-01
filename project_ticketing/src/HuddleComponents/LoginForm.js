import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { LOGIN_API_URL } from '../env.js';
export const UserAuth = (props) => {
    const [devloperId, inputDevId] = useState("");
    const [pass, inputPassword] = useState("");
    const handleInputDevId = (e) => {
        inputDevId(e.target.value);
    };
    const handleInputPass = (e) => {
        inputPassword(e.target.value);
    };
    async function callAPI() {
        let res = await axios({
            url: LOGIN_API_URL,
            method: 'post',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            },
            data: { devId: devloperId, password: pass }
        })
        // Don't forget to return something   
        return res
    }
    return (
        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>

                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">The Huddle</h3>
                                        <p className="text-muted mb-4">Please login to proceed furhter</p>
                                        
                                        <div className="mb-3">
                                            <input id="inputEmail" type="text" placeholder="User Id" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" value={devloperId} onChange={handleInputDevId} />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={pass} onChange={handleInputPass} />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={() => { callAPI().then(res => {let result = res; if (result.data.status !== "success") { alert("Either the user name or the password is wrong"); inputDevId(""); inputPassword(""); } else { props.showLeftNav(result.data.devId, result.data.devName) } }) }}>Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
