/// <reference path="./library.d.ts" />

import ns = require('./application');
'use strict';

ns.application.initializeComponents();

var path = requirejs.toUrl('./');

if (path.substring(0, 2) === './') {
    path = path.substring(2);
}

if (path.charAt(path.length - 1) === '/') {
    path = path.substring(0, path.length - 1);
}

new ns.application.Application(path).bootstrap();
