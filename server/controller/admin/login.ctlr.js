const db = require("../../config/db.config");
const pool = db.pool;

exports.login = async(req, res) => {
    // 1. variable holding the data enter 
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    // 2. check if the user exists
    const checkUser = await pool.query(
        `SELECT * FROM users WHERE email = $1`, [data.email]
    );

    if (checkUser.rows.length == 0) {
        res.status(401).send({
            status: 'Failed',
            message: 'user '
        });
    }
}