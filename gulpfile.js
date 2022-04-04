var gulp = require("gulp");
var qrc = require("gulp-qmlweb");
var concat = require("gulp-concat");
var sources = ["material.js"];
var resourceFile = "material.qrc";

gulp.task("rcc", function() {
  return gulp.src(resourceFile)
    .pipe(qrc({
      filename: "controls2.material.rc.js",
      src: "QmlWeb.newControls2Style(\"Material\", QtQuick_Controls_Material, {{object}});"
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build", gulp.series("rcc", function() {
  return gulp.src(sources.concat(["dist/controls2.material.rc.js"]))
    .pipe(concat("controls2.material.js"))
    .pipe(gulp.dest("./dist"));
}));

gulp.task("watch", gulp.series("build", function() {
  return gulp.watch(sources.concat([qrc]), gulp.series("build"));
}));
