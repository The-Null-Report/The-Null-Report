const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paper extends Model {}

Paper.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
	
		title: { 
			type: DataTypes.STRING, 
			allowNull: false,
		},

		author: { 
			type: DataTypes.STRING(1000),
			allowNull: false,
		},
		
		subject: { 
			type: DataTypes.STRING,
			allowNull: false,
		},

		reviewed: { 
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		
		published_by: { 
			type: DataTypes.STRING,
			allowNull: false,
		},

		publisher_id: { 
			type: DataTypes.INTEGER,
			references: {
				model: 'User',
				key: 'id',
			},
		},

		date_published: { 
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		freezeTableName: false,
		underscored: true,
		timestamps: true,
		modelName: 'paper',
	}
)