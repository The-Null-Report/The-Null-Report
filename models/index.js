const Users = require('./users');
const Paper = require('./paper');

Users.hasMany(Paper, {
	foreignKey: 'publisher_id'
});

Paper.belongsTo(Users, {
	foreignKey: 'publisher_id'
})

