import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Background} from './background.component';
import {Wall} from './wall.component';

@Component ({
    selector : 'app',
    directives : [Background, Wall],
    template : `
            <button id="toggle-wall-button" type="button" (click)="toggleWall()">Hide the Wall</button>
            <background></background>
            <wall></wall>
    `
})

class App {
    isWallVisible : boolean = true;
    constructor () {

    }

    toggleWall () {
        //Hide/show wall
        let wall = document.getElementById("wall");
        let background = document.getElementById("background");
        let toggleButton = document.getElementById("toggle-wall-button");
        if (this.isWallVisible) {
            //Work-around for banner delay
            wall.style.opacity = "0";
            wall.style["z-index"] = "-1";

            //Prevent scrolling when hidden
            wall.style.position = "fixed";
            //background.style.position = "relative";

            toggleButton.innerHTML = "Show the Wall";
            toggleButton.style.opacity = ".5";
            this.isWallVisible = false;
        } else {
            //Work-around for banner delay
            wall.style.opacity = "1";
            wall.style["z-index"] = "1";

            //Fix the position of wall
            wall.style.position = "relative";
            //background.style.position = "fixed";

            toggleButton.innerHTML = "Hide the Wall";
            toggleButton.style.opacity = "1";
            this.isWallVisible = true;
        }

    }
}

bootstrap(App);
