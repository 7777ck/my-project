const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect")
    // 添加博客
module.exports = sequelize.define('blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    toc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    htmlContent: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    scanNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createDate: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    // 停止Sequelize指定自动复数化，这样,  Sequelize 将推断表名称等于模型名称,而无需进行任何修改
    freezeTableName: true,
    // createdAt 字段将包含代表创建时刻的时间戳,而 updatedAt 字段将包含最新更新的时间戳。
    createdAt: false,
    updatedAt: false
});