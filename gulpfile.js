var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");

// Task which would transpile typescript to javascript
gulp.task("typescript", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// Task which would delete the old dist directory if present
gulp.task("build-clean", function () {
  return del(["./dist"]);
});

// Task which would just create a copy of the current views directory in dist directory
gulp.task("views", function () {
  return gulp.src("./src/views/**/*.ejs").pipe(gulp.dest("./dist/views"));
});

// Task which would just create a copy of the current images directory in dist directory
gulp.task("images", function () {
  return gulp
    .src("./src/public/images/**/*")
    .pipe(gulp.dest("./dist/public/images"));
});

// Task which would just create a copy of the current images directory in dist directory
gulp.task("stylesheets", function () {
  return gulp
    .src("./src/public/stylesheets/**/*")
    .pipe(gulp.dest("./dist/public/stylesheets"));
});

// Task which would just create a copy of the current static assets directory in dist directory
gulp.task("assets", function () {
  return gulp
    .src("./src/public/assets/**/*")
    .pipe(gulp.dest("./dist/public/assets"));
});

// The default task which runs at start of the gulpfile.js
gulp.task(
  "default",
  gulp.series(
    "build-clean",
    "typescript",
    "views",
    "images",
    "stylesheets",
    "assets"
  ),
  () => {
    console.log("Done");
  }
);
