const sequelize = require('../config/connection');
const { User, Paper } = require('../models');

const userData = require('./usersSeedData.json');
const paperData = require('./paperSeedData.json');

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	
	console.log(users);

	const paper = await Paper.bulkCreate(paperData);

	// for (const paper of paperData) {
	// 	await Paper.create({
	// 		...paper,
	// 		published_by: users.fName + " " + users.lName, 
	// 		publisher_id: users.id
	// 	});
	// }

	process.exit(0);
};

seedDatabase();

