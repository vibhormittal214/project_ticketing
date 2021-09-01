import { useState } from 'react';
import './App.css';
import LeftNavigation from './HuddleComponents/LeftNavigation.js';
import Header from './HuddleComponents/Header.js';
import { Footer } from './HuddleComponents/Footer.js';
import { ShowAllTicketFromBucket } from './HuddleComponents/ShowAllTicketOfBucket.js';
import { SearchTicketById } from './HuddleComponents/SearchTicketById.js';
import { GetTicketDetail } from './HuddleComponents/GetTicketDetails.js'
import { UserAuth } from './HuddleComponents/LoginForm.js'
function App() {
  const [whichTabToRender, renderData] = useState("show-login-form");
  const [bucketId, setProjectBucketId] = useState(null);
  const [individualTicketDetail, setTicketDetail] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [loggedInDevId, setLoggedInUserId] = useState(null);
  const [loggedInDevName, setLoggedInUserName] = useState(null);
  const triggerShowTicketFromBucket = (bucketId) => {
    setProjectBucketId(bucketId)
    renderData('bucket-tickets')
  }
  const triggershowIndividualTicket = (currentTicket) => {
    setTicketDetail(currentTicket)
    renderData('individual-ticket')
  }
  const showLeftNav = () => {
    renderData('show-left-nav')
  }
  const showLeftNavFromLogin = (logindevId, logindevName) => {
    setLoggedInUserId(logindevId)
    setLoggedInUserName(logindevName)
    renderData('show-left-nav')
  }
  const showSearchResult = (ticketId) => {
    setTicketId(ticketId)
    renderData('show-search-result')
  }
  const triggerLogOutFunc = () => {
    renderData('show-login-form')
  }
  let outerDivCss = {
    height: "580px",
    overflowY: "scroll",
    width: "100",
    textAlign: "center",
    margin: "auto",
    backgroundImage: 'url("https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")'
  }
  let letRightDivCss = {
    position: "relative",
    right: "0",
    flex: "1 0 90%",
  }
  return (
    <>
      {whichTabToRender === "show-login-form" && <UserAuth showLeftNav={showLeftNavFromLogin} />}
      {whichTabToRender !== "show-login-form" && <Header showAllTicketOfBucket={triggerShowTicketFromBucket} showLeftNav={showLeftNav} showSearchResult={showSearchResult} loggedInDevName={loggedInDevName} triggerLogOut={triggerLogOutFunc} />}
      {whichTabToRender === "show-left-nav" && <LeftNavigation loggedInDevId={loggedInDevId} />}
      {whichTabToRender === "bucket-tickets" && <div style={outerDivCss} className="d-flex align-items-start"><div style={letRightDivCss} className="tab-content" id="v-pills-tabContent"><div><ShowAllTicketFromBucket bucketId={bucketId} showIndividualTicket={triggershowIndividualTicket} /></div></div></div>}
      {whichTabToRender === "individual-ticket" && <div style={outerDivCss} className="d-flex align-items-start"><div style={letRightDivCss} className="tab-content" id="v-pills-tabContent"><div><GetTicketDetail TicketDetail={individualTicketDetail} /></div></div></div>}
      {whichTabToRender === "show-search-result" && <div style={outerDivCss} className="d-flex align-items-start"><div style={letRightDivCss} className="tab-content" id="v-pills-tabContent"><div><SearchTicketById ticketId={ticketId} showIndividualTicket={triggershowIndividualTicket} /></div></div></div>}
      {whichTabToRender !== "show-login-form" && <Footer />}
    </>
  );
}
export default App;
