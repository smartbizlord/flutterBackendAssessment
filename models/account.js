const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const account = sequelize.define('account', {
    accountNumber: {
        type: dataType.STRING,
        allowNull: false,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
    accountName: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
        lowercase: true,
    },
    dateOfBirth: {
        type: dataType.STRING,
        allowNull: false,
    },
    accountType: {
      type: dataType.ENUM('savings', 'checking', 'credit'),
      allowNull: false,
      lowercase: true,
    },
    initialBalance: {
      type: dataType.INTEGER,
      allowNull: false,
    }
  });

  return account;
};
