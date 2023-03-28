const {Pool} = require("pg")

const {PGUSER, PGHOST, PGDATABSE, PGPASSWORD, PGPORT} = process.env

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database:PGDATABSE,
    password:PGPASSWORD,
    port: PGPORT,
})

module.export = pool;