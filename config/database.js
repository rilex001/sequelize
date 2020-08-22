// const { Sequelize } = require('sequelize');



const Sequelize = require('sequelize')

const sequelize = new Sequelize('codegig', 'postgres',
  '', {
    host: 'localhost',
    dialect: 'postgres'
  })

  


module.exports = sequelize