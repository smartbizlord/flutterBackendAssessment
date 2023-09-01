const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { dB } = require('../models');
const logger = require('../config/logger');



const generateAccountNumber = async(type) => {
  let initial;
  switch (type) {
    case "savings":
      initial = 11
    break;
    case "checking":
      initial = 21
    break;
    case "current":
      initial = 31
    break;
  
    default:
      initial = 11
      break;
  }
  const number = `${initial}${Math.floor(Math.random() * 99999999) + 1}`
  console.log(number, "Number")
  return number;
}

const isAccountTaken = async function (accountNumber) {
  const account = await dB.accounts.findOne({ where: { accountNumber } });
  logger.info(account);
  return !!account;
};

const createAccount = async (AccBody) => {
  const accNumber = await generateAccountNumber(AccBody.accountType)
  if (await isAccountTaken(accNumber)) {
    throw new ApiError(httpStatus.BAD_GATEWAY, 'Please Try Again');
  }
  // eslint-disable-next-line no-param-reassign
  AccBody.accountNumber = accNumber
  await dB.accounts.create(AccBody);
  return accNumber;
};

const geSingleAccount = async (accountNumber, include, exclude) => {
  const account = await dB.accounts.findOne({ where: { accountNumber }, attributes: { include, exclude }});
  if (!account) {
    throw new ApiError(httpStatus.NOT_FOUND, "The account does not exist")
  }
  return account;
};

const getAllAccounts = async (limit = 50, page = 1, include, exclude) => {
  let offset = page <= 0 ? 0 : (page - 1) * limit;
  const result = await dB.accounts.findAndCountAll({
    limit,
    offset,
    attributes: { include, exclude }
  })
  let accounts = {};
  let totalPages = Math.ceil(result.count / limit);
  accounts.dataCount = result.count;
  accounts.page = page <= 0 ? 1 : page;
  accounts.totalPages = totalPages;
  accounts.userData = result.rows;
  return accounts;
};



module.exports = {
  generateAccountNumber,
  isAccountTaken,
  createAccount,
  geSingleAccount,
  getAllAccounts,
};
