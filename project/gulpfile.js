var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

var browserSync = require('browser-sync').create();
 browserSync.init({
 	 injectChanges: true,
     server: "./"
 });
 browserSync.stream();