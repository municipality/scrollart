import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import {Background} from './background.component';
import {BackgroundService} from './background.service';
import {Wall} from './wall.component';
import {WallService} from './wall.service';
import {BannerService} from './banner.service';



@Component ({
    selector : 'app',
    directives : [Background, Wall],
    template : `
            <button id="toggle-wall-button" type="button" (click)="toggleWall()">Hide the Wall</button>
            <background></background>
            <div *ngIf="showWall">
                <wall></wall>
            </div>

    `
})

class App {
    isWallVisible : boolean = true;
    constructor () {
    }

    showWall : boolean = true;
    toggleWall() {
        this.showWall = !this.showWall;
    }


}



bootstrap(App, [BackgroundService, WallService, BannerService]);
