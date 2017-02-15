'use strict';

const gulp = require('gulp'),
		  sass = require('gulp-sass'),
		  prefixer = require('gulp-autoprefixer'),
		  cleanCSS = require('gulp-clean-css'),
		  browserSync = require('browser-sync'),
		  del = require('del'),
		  useref = require('gulp-useref'),
		  gulpif = require('gulp-if'),
		  uglify = require('gulp-uglify'),
		  notify = require( 'gulp-notify' );


// Sass
gulp.task('sass', () => {
	return gulp.src('app/sass/main.scss')
		.pipe(sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass Error!"
      } ) )
    )
		.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream:true}));
});



// Server
gulp.task('browser-sync', function() {
	browserSync({
			server: {
					baseDir: 'app/'
			},
			notify: false
	});
});


// Watch
gulp.task('watch', ['browser-sync', 'sass'], () => {
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/sass/**/*', ['sass']);
	gulp.watch('app/js/**/*', browserSync.reload);
});


// Build
gulp.task('clean', () => {
	return del.sync('dist');
});

gulp.task('build', ['clean', 'sass'], () => {

	const buildHTML = gulp.src('app/*.html')
											.pipe(useref())
											// .pipe(gulpif('*.js', uglify()))
											.pipe(gulpif('*.css', cleanCSS()))
											.pipe(gulp.dest('dist/'));

	const viewHTML = gulp.src('app/view/*.html')
											.pipe(gulp.dest('dist/view/'));

	const images = gulp.src('app/img/**/*')
											.pipe(gulp.dest('dist/img/'));

});


// Default
gulp.task('default', ['watch']);