const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { accountService, userService, tokenService, emailService } = require('../services');
const config = require("../config/auth");
const pick = require('../utils/pick');



const createAccount = catchAsync(async (req, res) => {
  const newAccount = await accountService.createAccount({
    accountName: req.body.name,
    dateOfBirth: req.body.dob,
    accountType: req.body.acct_type,
    initialBalance: req.body.initial_balance,
  });
  res.status(httpStatus.CREATED).send({acc_number: newAccount});
});

const getSingleAccount = catchAsync(async (req, res) => {
  const account = await accountService.geSingleAccount(req.body.acc_number, ['accountNumber', 'accountName', 'dateOfBirth', 'accountType', 'initialBalance'], ['createdAt', 'updatedAt']);
  res.status(httpStatus.OK).send(account);
});

const getAllAccounts = catchAsync(async (req, res) => {
  const page = pick(req.query, ['page']) || 1;
  const limit = pick(req.query, ['limit']) || 50;
  console.log(page, "page")
  console.log(limit, "limit")
  const result = await accountService.getAllAccounts( limit.limit, page.page, ['accountNumber', 'accountName', 'dateOfBirth', 'accountType', 'initialBalance'], ['createdAt', 'updatedAt']);
  res.status(httpStatus.OK).send(result)
})


module.exports = {
  createAccount,
  getSingleAccount,
  getAllAccounts,
};
