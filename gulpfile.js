const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('testavimas', function(){
    console.log('Gulpas veikia mavafaka');
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))   // sass padaromas
        .pipe(autoprefixer({                       // <<< autoprefixeris padaromas
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./p25-coffee*.js'),
            uglify(),
            gulp.dest('./p25-coffee/dist/**/*.js')
        ],
        cb
    );
});


// namu darbams isidiegti gulp-uglify