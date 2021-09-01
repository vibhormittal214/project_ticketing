const { pool } = require('./config')
const getAllDevelopers = (request, response) => {
    pool.query('SELECT developer_name,developer_id FROM member_developers', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getAllDevelopers
};