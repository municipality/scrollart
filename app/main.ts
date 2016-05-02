import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Background} from './background.component';
import {Page} from './page.component';

@Component ({
    selector : 'app',
    directives : [Background, Page],
    template : `
            <button id="toggle-wall-button" type="button" (click)="toggleWall()">Hide the Wall</button>
            <background></background>
            <page></page>
    `
})

class App {
    isWallVisible : boolean = true;
    constructor () {

    }

    toggleWall () {
        //Hide/show wall
        let wall = document.getElementById("wall");
        let toggleButton = document.getElementById("toggle-wall-button");
        if (this.isWallVisible) {
            wall.style.visibility = "hidden";
            //Prevent scrolling when hidden
            wall.style.position = "fixed";

            toggleButton.innerHTML = "Show the Wall";
            this.isWallVisible = false;
        } else {
            wall.style.visibility = "visible";
            //Fix the position of wall
            wall.style.position = "relative";
            
            toggleButton.innerHTML = "Hide the Wall";
            this.isWallVisible = true;
        }

    }
}

bootstrap(App);
