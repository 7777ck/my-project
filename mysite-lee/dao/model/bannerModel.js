const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect")
    // 创建首页标语表
module.exports = sequelize.define('banner', {
    midImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bigImg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
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