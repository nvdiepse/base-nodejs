const db = require('../../config/db');

const users = async (req, res) => {
  try {
    let sql = "SELECT * FROM users ORDER BY id ASC";
    db.query(sql, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  users,
};
