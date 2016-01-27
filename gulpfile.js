var gulp = require('gulp');
// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
// var util = require('gulp-util');
// var gulpprint = require('gulp-print');
// var gulpif = require('gulp-if');
// var args = require('yargs').argv;
var $ = require('gulp-load-plugins') ({lazy: true});
var config = require('./gulp.config')();
// var del = require('del');

// gulp.task('vet', function () {
// 	return gulp.src(config.alljs)
// 		.pipe(gulpif(args.verbose, gulpprint()))
// 		.pipe(jscs())
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('jshint-stylish', {verbose: true}))
// 		.pipe(jshint.reporter('fail'));
// });

// function log(msg) {
// 	if (typeof(msg) === 'object') {
// 		for (var item in msg) {
// 			if (msg.hasOwnProperty(item)) {	
// 				util.log(util.colors.blue(msg[item]));
// 			}
// 		}
// 	} else {
// 		util.log(util.colors.blue(msg));
// 	}
// }


// gulp.task('clean-styles', function () {
// 	var files = config.temp + '**/*.css';
// 	del(files);
// });

gulp.task('styles', function () {
	console.log('compiling less to css');
	
	return gulp
		.src(config.less)
		.pipe($.less())
		.pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']}))
		.pipe(gulp.dest(config.temp));
	
	
});


gulp.task('less-watcher', function () {
	gulp.watch([config.less], ['styles']);
});


