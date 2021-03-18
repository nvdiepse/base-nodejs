const knex = require('../../config/db');
const {HOME} = require('../../constants/common');
const getUsers = async (req, res) => {
    try {
        console.log(HOME)
        // let data = await knex.select('*').from('users');
        // data.map(item => {
        //     item.__link = item.id;
        //     return item;
        // })
        // console.log(data);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getUsers
}