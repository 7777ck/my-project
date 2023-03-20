const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect")
    // 创建数据库表单
module.exports = sequelize.define('admin', {
    // 这张表的字段
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // 停止Sequelize指定自动复数化，这样,  Sequelize 将推断表名称等于模型名称,而无需进行任何修改
    freezeTableName: true,
    // createdAt 字段将包含代表创建时刻的时间戳,而 updatedAt 字段将包含最新更新的时间戳。
    createdAt: false,
    updatedAt: false
});