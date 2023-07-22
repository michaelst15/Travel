import { Sequelize } from 'sequelize';

const db = new Sequelize('mysql', 'root',  'root', {
    host: 'localhost',
    dialect: 'mysql',
});

db
.authenticate()
.then(() => console.log('success'))
.catch((err) => console.log(err.message))

export default db;



