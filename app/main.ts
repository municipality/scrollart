import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';

import {Tetris} from './tetris.component';
import {MobileService} from './mobile.service';
@Component ({
    selector : 'app',
    directives : [Tetris],
    template : `
        <img id="banner" class="app-width" src="images/banner.png">
        <tetris></tetris>
    `
})

class App {

    constructor () {

    }

}



bootstrap(App, [MobileService]);
