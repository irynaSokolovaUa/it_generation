const gulp = require('gulp');

 gulp.task('hi', function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('newFolder'))
});