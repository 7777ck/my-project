// 该文件负责对数据库进行一个初始化操作
const sequelize = require("./dbConnect"); // 数据库连接实例

const adminModel = require("./model/adminModel"); // 数据模型
const bannerModel = require("./model/bannerModel");
const blogTypeModel = require("./model/blogTypeModel");
const blogModel = require("./model/blogModel");
const demoModel = require("./model/demoModel");
const messageModel = require("./model/messageModel");
const aboutModel = require('./model/aboutModel');
const settingModel = require("./model/settingModel");

const md5 = require('md5'); //
(async function() {
    // 定义模型之间的关联
    //文章和博客分类之间的关联
    blogTypeModel.hasMany(blogModel, { foreignKey: 'categoryId', sourceKey: 'id' });
    blogModel.belongsTo(blogTypeModel, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });

    // // 博客和博客评论之间的关联关系
    blogModel.hasMany(messageModel, { foreignKey: 'blogId', sourceKey: 'id' });
    messageModel.belongsTo(blogModel, { foreignKey: 'blogId', targetKey: 'id', as: 'blog' });
    // 将数据模型和表进行同步
    await sequelize.sync({
            alter: true, //检查数据库中表的当前状态 然后再根据字段的更改 对表中进行必要的更改
        })
        // 同步完成后 有些表需要进行初始化数据
        //先检查表内有没有数据 没有内容在进行初始化
    const adminCount = await adminModel.count();
    if (!adminCount) {
        await adminModel.create({
            loginId: "admin",
            name: "超级管理员",
            loginPwd: md5("123456")
        })
    }
    const bannerCount = await bannerModel.count();
    if (!bannerCount) {
        // 对没有数据的库进行初始化数据
        await bannerModel.bulkCreate([{
                "midImg": "/static/images/1.jpg",
                "bigImg": "/static/images/3.jpg",
                "title": "鹅鹅鹅",
                "description": "青青子衿悠悠我心"
            },
            {
                "midImg": "/static/images/2.jpg",
                "bigImg": "/static/images/3.jpg",
                "title": "叽叽叽",
                "description": "明月几时有把酒问青天"
            },
            {
                "midImg": "/static/images/1.jpg",
                "bigImg": "/static/images/4.jpg",
                "title": "吱吱吱",
                "description": "我自向山走去"
            }
        ]);
    }

      // 全局设置数据初始化
      const settingCount = await settingModel.count(); // 首先进行查询看有没有数据
      if (!settingCount) {
          // 如果没有数据就进行初始化
          await settingModel.create({
              avatar: '/static/images/头像.jpg',
              siteTitle: '我的个人空间',
              github: 'https://github.com/',
              qq: '1401771935',
              qqQrCode:
                  '/static/images/头像.jpg',
              weixin: '1401771935',
              weixinQrCode:
                  '/static/images/头像.jpg',
              mail: '1401771935@qq.com',
              icp: '天下第一',
              githubName: 'ck7777',
              favicon: '',
          });
          console.log("初始化全局设置数据...");
      }

}())