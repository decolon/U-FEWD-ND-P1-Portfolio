var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	cssmin = require('gulp-cssmin'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename');
	plumber = require('gulp-plumber')


livereload.listen();
gulp.task('watch', ['watchCss', 'watchHtml'])


gulp.task('watchCss', function()
{
	gulp.watch('app/css/*.css', ['styleMin']);
});

gulp.task('styleMin', function()
{
	gulp.src('app/**/*.css')
		.pipe(plumber())
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public/dist'))
		.pipe(livereload());
});


gulp.task('watchHtml', function()
{
	gulp.watch('*.html', ['htmlReload']);
});

gulp.task('htmlReload', function()
{
	gulp.src('*.html')
		.pipe(plumber())
		.pipe(htmlmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public'))
		.pipe(livereload());
});


