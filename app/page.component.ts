import {Component} from 'angular2/core';
import {Square} from './square.component';

@Component ({
    selector : 'page',
    directives : [Square],
    template : `
        <div id="wall">
            <table id="square-table">
                <tr *ngFor="#row of builder">
                    <td *ngFor="#square of row">
                        <square [title]="square.title" [description]="square.description" [src]="square.src"></square>
                    </td>
                </tr>
            </table>
            <div>

        </div>


    `
})
export class Page {
    //used to build the squares
    numColumns : number = 3;
    builder : any[][] = [];

    //Construct the builder which is used to lay out the squares by template
    constructor () {
        for (let i = 0; i < this.squares.length; i++) {
            //For every numColumns squares, construct a new row
            if (i%this.numColumns == 0) {
                this.builder.push([]);
            }
            this.builder[this.builder.length - 1].push(this.squares[i]);
        }
    }
    /*
    Squares
        title : title of square
        src : image file name in pathToImages
        description : square description
    */
    squares : any[] = [
        {
            title : ``,
            src : `aboutbrianlee.jpg`,
            description : ``
        },
        {
            title : `Software Engineer`,
            src : 'aboutme.jpg',
            description : `UC San Diego 2014 Computer Science Major`
        },
        {
            title : `Weight Lifter`,
            src : `sample.jpg`,
            description : `Active weight-lifter for six years`
        },
        {
            title : `Photographer`,
            src : `photographer.jpg`,
            description : `Amateur photographer experienced with both DSLR and polaroid cameras`
        },
        {
            title : `Snowboarder`,
            src : `snowboard.jpg`,
            description : `Amateur snowboarder with consistent rear-end pain`
        },
        {
            title : `Tetris Enthusiast`,
            src : `tetris.jpg`,
            description : `High score of 41933 on Tetris Ultra, proficient at T-spinning and ST stacking`
        },
        {
            title : `Dessert Connoisseur`,
            src : `dessert.jpg`,
            description : `Expert in tasting different types of desserts`
        },
        {
            title : `Hiker`,
            src : `hiker.jpg`,
            description : `Always actively looking for new trails to hike`
        },
        {
            title : `Dancer`,
            src : `dancer.jpg`,
            description : `Amateur dancer, but expert with good company and a couple beers`
        },
        {
            title : `World Explorer`,
            src : `explorer.jpg`,
            description : `Lover of new environments and exotic foods`
        },
        {
            title : `Jokester`,
            src : `jokester.jpg`,
            description : `Creator of bad jokes and puns with a side of horrendously loud laughter`
        }
    ];


}
