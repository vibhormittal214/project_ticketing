const getAllProject = require('./getAllProjects.js');
const setNewProject = require('./setNewProject.js');
const getAllTickets = require('./getAllTickets.js');
const getAllDevelopers = require('./getAllDevelopers.js');
const getTicketById = require('./searchTicketById.js');
const getTicketByBucketId = require('./searchTicketByBucketId.js');
const getTicketByDevId = require('./searchTicketByDevId.js');
const submitNewTicket = require('./submitNewTicket.js');
const performuserAuthentication = require('./userAuthentication.js');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

// Start server
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server listening`)
})
{
    app.route('/getProjectList').post(getAllProject.getAllProjects)
    app.route('/setNewProject').post(setNewProject.addProject)
    app.route('/getAllTickets').post(getAllTickets.getAllticket)
    app.route('/getAllDevelopers').post(getAllDevelopers.getAllDevelopers)
    app.route('/searchTicketById').post(getTicketById.getTicketById)
    app.route('/searchTicketByBucketId').post(getTicketByBucketId.getTicketsByBucketId)
    app.route('/searchTicketByDevId').post(getTicketByDevId.getTicketByDevId)
    app.route('/submitNewTicket').post(submitNewTicket.submitNewTicket)
    app.route('/userAuth').post(performuserAuthentication.doUserAuthentication)
    app.route('/userAuth1').get(performuserAuthentication.doUserAuthentication)
}


