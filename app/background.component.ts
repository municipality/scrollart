import {Component, OnInit} from 'angular2/core';
import {BackgroundService} from './background.service';

@Component({
    selector : 'background',
    providers : [BackgroundService],
    //template for row by column image generation
    //#image lets you access "this" in the "loaded" function
    template : `
        <div id='background'>
            <tr *ngFor="#row of photos">
                <td *ngFor="#item of row">
                    <a href="#" (click)="imageClick(image)">
                        <img #image id='background-{{item.id}}' class="background-images" src='{{item.src}}'>
                    </a>
                </td>
            </tr>
        </div>
    `
})

export class Background implements OnInit{
    photos : any[][] = [];

    imageClick (image) {
        return false;
    }

    //Do not put complex logic inside constructor (aka calling a service)
    constructor (private backgroundService : BackgroundService) {

    }

    ngOnInit () {
        this.photos = this.backgroundService.getPhotos();
    }

}
