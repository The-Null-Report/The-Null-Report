const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        fName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },

        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        reviewer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        reviewerRequestPending: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        areaOfStudy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        submittedId: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        saved: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;