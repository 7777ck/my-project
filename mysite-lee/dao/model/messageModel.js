const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect")
    // 创建留言表 (定义模型与表之间的映射)
module.exports = sequelize.define('message', {
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
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