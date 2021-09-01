const { pool } = require('./config')
const getTicketById = (request, response) => {
    const {searchKeyword} = request.body
    if(searchKeyword===null || searchKeyword===undefined || searchKeyword==="" || searchKeyword<=0){
        response.status(200).json({})
        return;
    }
    if(Number.isInteger(searchKeyword) || Number.isInteger(Number(searchKeyword))){
        pool.query('select * from ticket_master where ticket_id = $1',[Number(searchKeyword)],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
            return;
        })
    }else if(typeof(searchKeyword)==="string" && searchKeyword!=""){
        let upperSearchKeyword = searchKeyword.toUpperCase();
        pool.query("select * from ticket_master where upper(description) like '%"+upperSearchKeyword+"%' OR UPPER(title) like '%"+upperSearchKeyword+"%'",
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
            return;
        })
    }else{
        response.status(200).json({})
        return;
    }
   
}
module.exports = {
    getTicketById
};