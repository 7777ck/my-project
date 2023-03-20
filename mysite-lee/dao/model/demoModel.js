const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect")
    //    项目管理模块
module.exports = sequelize.define('demo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumb: {
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