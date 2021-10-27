const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        fName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8],
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,    
        },
        reviewer:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        areaOfStudy:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        submittedId:{
            type: DataTypes.STRING,
            allowNul: true,

        },
        saved:{
            type: DataTypes.STRING,
            allowNul: true,
        },
        
        //NOT SURE IF WE WANT TO ADD THIS LET ME KNOW WHAT YOU THINK
        // date_created: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW,
        // },

    },
    hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
);

module.exports = Users;