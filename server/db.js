const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Toctap03",
    host: "localhost",
    port: 5432,
    database: "hockey_simulation"
});

module.exports = pool;