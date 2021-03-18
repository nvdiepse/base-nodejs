const logger = require("../../libs/logger");
const getUsers = (req, res) => {
    console.log(req.originalUrl);
}


module.exports = {
    getUsers
}