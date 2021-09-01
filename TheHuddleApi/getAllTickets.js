const { pool } = require('./config')
const getAllticket = (request, response) => {
    pool.query('SELECT * FROM ticket_master', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getAllticket
};