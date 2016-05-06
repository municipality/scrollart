import {Component} from 'angular2/core';
import {BackgroundService} from './background.service';

@Component({
    selector : 'background',
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

export class Background {
    photos : any[][] = [];

    imageClick (image) {
        return false;
    }

    constructor (private backgroundService : BackgroundService) {
        this.photos = backgroundService.getPhotos();
    }

}
