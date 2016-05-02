import {Component, Input} from 'angular2/core';

@Component({
    selector : 'square',
    template : `
        <div class="square">
            <p class="square-title">{{title}}</p>
            <img class="square-image" src='{{pathToImages}}{{src}}'>
            <p class="square-description">{{description}} <a target="_blank" href="{{descriptionLinkURL}}">{{descriptionLink}}</a></p>

        </div>
    `
})

export class Square {
    pathToImages:string = "images/squares/";
    @Input() title:string;
    @Input() description:string;
    @Input() src:string;
    @Input() descriptionLinkURL:string;
    @Input() descriptionLink:string;

    constructor () {

    }
}
