const { pool } = require('./config')
const addProject = (request, response) => {
    const { bucketId, bucketName } = request.body
    console.log(request.body);
    pool.query(
        'INSERT INTO project_bucket (bucket_id, bucket_name) VALUES ($1, $2)',
        [bucketId, bucketName],
        (error) => {
            if (error) {
                response.status(201).json({ status: 'failure', message: error })
            }
            response.status(201).json({ status: 'success', message: 'New project added.' })
        },
    )
}
module.exports = {
    addProject
};