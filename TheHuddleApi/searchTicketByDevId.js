const { pool } = require('./config')
const getTicketByDevId = (request, response) => {
    const {devId} = request.body
    //console.log("I am here")
    //console.log(request.body);
    pool.query('select * from ticket_master where fk_developer_id = $1',[devId],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getTicketByDevId
};