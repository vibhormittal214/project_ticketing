const { pool } = require('./config')
const doUserAuthentication = (request, response) => {
    const {devId,password} = request.body
    if(isNaN(devId) || devId===null || devId===undefined){
        returnArray = {status:"failure",message:"password unverified"}
        return response.status(200).json(returnArray)
    }
    let numericDevId = Number(devId)
    if(numericDevId===0|| numericDevId===null|| numericDevId===undefined){
        returnArray = {status:"failure",message:"password unverified"}
        return response.status(200).json(returnArray)
    }
    if(password===""|| password===null|| password===undefined){
        returnArray = {status:"failure",message:"password unverified"}
        return response.status(200).json(returnArray)
    }
    let pass = "";
    pool.query('select password,developer_id,developer_name from member_developers where developer_id = $1',[numericDevId],
    (error, results) => {
        if (error) {
            response.status(400).json(error)
        }
        if(results.rows.length===0){
            returnArray = {status:"failure",message:"password unverified"}
        }else{
            pass = results.rows[0]["password"];
            let returnArray;
        }
        if(pass===password){
            returnArray = {status:"success",message:"password verified",devId:results.rows[0]["developer_id"],devName:results.rows[0]["developer_name"]}
        }else{
            returnArray = {status:"failure",message:"password unverified"}
        }
        response.status(200).json(returnArray)
    })
}
module.exports = {
    doUserAuthentication
};