const { pool } = require('./config')
const getAllProjects = (request, response) => {
    pool.query('SELECT * FROM project_bucket', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getAllProjects
};