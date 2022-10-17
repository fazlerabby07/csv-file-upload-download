module.exports = (sequelize, Sequelize) => {
	const Files = sequelize.define('files', {
		name: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
	});

	return Files;
};
