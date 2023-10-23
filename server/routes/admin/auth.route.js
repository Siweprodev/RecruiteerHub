const express = require('express');
const router = express();

const { createUser } = require('../../controller/admin/addUser.ctlr');

router.post('/addUser', createUser);

module.exports = router;