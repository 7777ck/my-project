//连接数据库
const { Sequelize } = require('sequelize');

//创建数据库连接
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

// 测试是否连接成功
// (async function() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }())

module.exports = sequelize;