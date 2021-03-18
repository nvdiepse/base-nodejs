module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.USER_NAME,
            password: process.env.DB_PASSWORD,
            charset: 'utf8'
        },
        migrations: {
            directory: __dirname + '/src/migrations',
        },
        seeds: {
            directory: __dirname + '/src/seeds'
        }
    },
};
