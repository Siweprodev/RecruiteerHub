const pg = require('pg');

const config = {
    user: 'postgres', //this is the db user credential
    database: 'recruiterhub',
    password: '',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to the Database');
});


module.exports = {
    pool
}