const { src, dest, watch, parallel, series } = require('gulp');
const scss               = require('gulp-sass');
const nunjuckRender      = require('gulp-nunjucks-render');
const autoprefixer       = require('gulp-autoprefixer');
const rename             = require('gulp-rename');
const concat             = require('gulp-concat');
const uglify             = require('gulp-uglify');
const imagemin           = require('gulp-imagemin');
const del                = require('del');
const webp               = require('gulp-webp');
const webphtml           = require('gulp-webp-html');
const browserSync        = require('browser-sync').create();


function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
    notify: false
  })
}

function styles() {
  return src('app/scss/*.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: false
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',                                                                                                                                                                                                                                                                                              
      'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
      'node_modules/rateyo/src/jquery.rateyo.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function html() {
  return src('app/**/*.html')
  .pipe(webphtml())
  .pipe(dest('dist'))
}

function nunjuck() {
  return src('app/nunjuck/*.njk')
  .pipe(nunjuckRender())
  .pipe(dest('app'))
  .pipe(browserSync.stream())
}

function images(){
  return src('app/images/**/*.*')
  .pipe(webp({
    quality: 70
  }))
  .pipe(dest('dist/images'))
  .pipe(src('app/images/**/*.*'))
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 70, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/*.min.css',
    'app/fonts/*.*',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/**/*.scss'], styles);
  watch(['app/**/*.njk'], nunjuck);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.nunjuck = nunjuck;
exports.html = html;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, html, build);

exports.default = parallel(nunjuck, styles, scripts, html, browsersync, watching);