import {Component} from 'angular2/core';
import {Square} from './square.component';
import {ContactFooter} from './contact.footer';
import {Banner} from './banner.component';
import {WallService} from './wall.service';

@Component ({
    selector : 'wall',
    directives : [Square, ContactFooter, Banner],
    template : `
        <div id="wall">
            <banner></banner>
            <table id="square-table">
                <tr *ngFor="#row of builder">
                    <td *ngFor="#square of row">
                        <square [title]="square.title" [description]="square.description" [src]="square.src"
                                [descriptionLink]="square.descriptionLink" [descriptionLinkURL]="square.descriptionLinkURL">
                        </square>
                    </td>
                </tr>
            </table>
            <div>
            <contact></contact>
        </div>


    `
})
export class Wall {
    builder : any[][];

    //Construct the builder which is used to lay out the squares by template
    constructor (private wallService : WallService) {
        this.builder = wallService.getSquaresTable();
    }

}
