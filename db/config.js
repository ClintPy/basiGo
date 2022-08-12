require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER ?? "postgres"}:${process.env.DB_PASSWORD ?? "postgres"}@${process.env.DB_HOST ?? localhost}:${process.env.DB_PORT ?? 5432}/${process.env.DB_DATABASE ?? `basigo`}`;

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
});

module.exports = { pool };
