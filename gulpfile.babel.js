'use strict';

import gulp from 'gulp';
import selenium from 'selenium-standalone';
import webdriver from 'gulp-webdriver';

let seleniumServer;

gulp.task('selenium', (done) => {
    selenium.install({ logger: (message) => {} }, () => {
        selenium.start((err, child) => {
            if (err) {
                return done(err);
            }
            seleniumServer = child;
            done();
        });
    });
});

gulp.task('wdio', ['selenium'], () => {
    return gulp.src('wdio.conf.js')
        .pipe(webdriver({
            logLevel: 'silent',
            waitforTimeout: 9999999,
            reporter: 'spec'
        })).on('error', () => {
            seleniumServer.kill();
            process.exit(1);
        });
});

gulp.task('test', ['wdio'], () => {
    seleniumServer.kill();
});
