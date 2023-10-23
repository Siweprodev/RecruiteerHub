const db = require("../../config/db.config");
const pool = db.pool;
const bcrypt = require("bcrypt");


exports.createUser = async(req, res) => {
    // 1. variable holding the data enter 
    const data = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    // 2. check if the user already exists
    const checkUser = await pool.query(
        `SELECT * FROM users WHERE email = $1`, [data.email]
    );


    // 3. getting the specif rows from the api response 
    let verify = checkUser.rows;

    // 4. hashing password
    let salt = await bcrypt.genSalt(10);

    // 5. setting password to hashed password
    data.password = await bcrypt.hash(data.password, salt);



    if (verify.length != 0) {
        res.status(401).send({
            status: 'Failed',
            message: 'user already exists'
        });
    } else {
        try {
            pool.connect((err, client, done) => {
                const query = `
                INSERT INTO users(full_name, email, password, role) 
                VALUES($1,$2,$3,$4) 
                RETURNING *`;

                const values = [data.full_name, data.email, data.password, data.role];

                client.query(query, values, (error, result) => {
                    done();
                    if (error) {
                        res.status(400).json({ error });
                    }
                    res.status(202).send({
                        status: 'Successful',
                        result: result.rows[0],
                    });
                });
            });
        } catch (err) {
            res.status(400).json({
                message: "Failed to add a user",
                error: err
            });
        }
    }




}