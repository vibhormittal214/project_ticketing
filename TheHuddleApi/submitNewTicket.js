const { pool } = require('./config')
const submitNewTicket = (request, response) => {
    const { bucketId, developerId, desc, acptCriteria, title,loggedInUser } = request.body
    let bucketName = "";
    let developerName = "c";
    let currentDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    pool.query('select bucket_name from project_bucket where bucket_id = $1',
        [bucketId],
        (error, results) => {
            if (error) {
                throw error
            }
            bucketName = results.rows[0]["bucket_name"]
            pool.query('select developer_name from member_developers where developer_id = $1 union all select developer_name from member_developers where developer_id = $2 ',
                [developerId,loggedInUser],
                (error, results) => {
                    if (error) {
                        response.status(201).json({ status: 'failure', message: error })
                    }
                    developerName = results.rows[0]["developer_name"]
                    ticketCreatorName = results.rows[1]["developer_name"]
                    pool.query('INSERT INTO ticket_master(bucket_name,fk_bucket_id,fk_developer_id,description,acpt_criteria,title,creation_date,developer_name,ticket_created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *',
                        [bucketName, bucketId, developerId, desc, acptCriteria, title, currentDate, developerName,ticketCreatorName],
                        (error, results) => {
                            if (error) {
                                response.status(201).json({ status: 'failure', message: error })
                            }
                            response.status(200).json(results.rows)
                        })
                })
        })
}
module.exports = {
    submitNewTicket
};