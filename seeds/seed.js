const sequelize = require('../config/connection');
const { users, paper } = require('../models');

const userData = require('./usersSeedData.json');
const paperData = require('./paperSeedData.json');

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await users.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});
	

	for (const paper of paperData) {
		await paper.create({
			...paper,
			published_by: users.fName + users.lName, 
			publisher_id: users.id
		});
	}

	process.exit(0);
};

seedDatabase();

