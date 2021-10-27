const User = require('./User');
const Paper = require('./Paper');

User.hasMany(Paper, {
	foreignKey: 'publisher_id'
});

Paper.belongsTo(User, {
	foreignKey: 'publisher_id'
})

module.exports = { User, Paper }