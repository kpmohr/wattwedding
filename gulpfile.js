var gulp = require ('gulp');
var watch = require ('gulp-watch');

var connect = require ('gulp-connect');
var sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server();
});

  gulp.task('default', ['connect']);
