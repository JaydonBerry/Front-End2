var gulp = require('gulp'),
    useref = require('gulp-useref');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var del = require('del');
var cache = require('gulp-cache');

//Set up the server
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

//minify images
gulp.task('images', function(){
 return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
 // Caching images that ran through imagemin
 .pipe(cache(imagemin({
     interlaced: true
   })))
 .pipe(gulp.dest('dist/images'))
});



//Set up the concatination plugin
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});



//the following will run all the below tasks in the order they are written. items in [] will run in parallel
gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})

//The following will run the tasks of compiling the sass, running the server and then running the watch tasks when you run "gulp" in the cli
gulp.task('default', function (callback) {
  runSequence('build', ['browserSync', 'watch'],
    callback
  )
})