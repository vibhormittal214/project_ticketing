const { pool } = require('./config')
const getTicketsByBucketId = (request, response) => {
    const {bucketId} = request.body
    //console.log("I am here")
    //console.log(request.body);
    pool.query('select * from ticket_master where fk_bucket_id = $1',[bucketId],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getTicketsByBucketId
};