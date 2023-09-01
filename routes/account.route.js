const express = require('express');
const validate = require('../middlewares/validate');
const userValidation = require('../validations/user.validation');
const auth = require('../middlewares/auth');
const { verifyToken } = require('../middlewares/verify');
const { accountController } = require('../controllers');

const router = express.Router();

router.post('/new', validate(userValidation.createAccount), verifyToken, auth(), accountController.createAccount);
router.post('/all', validate(userValidation.viewAllAccount), accountController.getAllAccounts);
router.post('/single', validate(userValidation.viewSingleAccount), accountController.getSingleAccount);

module.exports = router;