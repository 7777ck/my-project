var express = require('express');
var router = express.Router();
const { findBannerService, updateBannerService } = require('../service/bannerService');
// 获取首页标语
router.get('/', async function(req, res, next) {
    // 从业务逻辑层处理后返回的数据库数据
    res.send(await findBannerService())
})

// 设置首页标语
router.post('/', async function(req, res, next) {
    res.send(await updateBannerService(req.body))
})

module.exports = router;