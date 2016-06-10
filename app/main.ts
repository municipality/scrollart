import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';

import {Tetris} from './tetris.component';
import {Intro} from './intro.component';
import {MobileService} from './mobile.service';
import {ScrollingService} from './scrolling.service';

@Component ({
    selector : 'app',
    directives : [Tetris, Intro],
    template : `
        <img id="banner" class="app-width" src="images/banner.png">
        <tetris></tetris>
        <intro></intro>
    `
})

class App {

    constructor () {

    }

}



bootstrap(App, [MobileService, ScrollingService]);
