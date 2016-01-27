module.exports = function () {
	var client = './src/client/';
	var config = {
		
		temp: './.tmp',
		
		less: client + 'styles/styles.less',
		
		alljs: [
		'./src/**/*.js',
		'./*.js'
		]
	};
	
	return config;
};