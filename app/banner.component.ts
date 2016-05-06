import {Component} from 'angular2/core';
import {BannerService} from './banner.service';

@Component ({
    selector : 'banner',
    template : `
        <div id='banner-container'>
            <div *ngFor="#imageSrc of bannerList">
                <img #image (load)="loaded(image)" class="banner-image" src={{imageSrc}}>
            </div>
        </div>
    `
})

export class Banner {
    bannerList : string[] = [];
    //used to see when all images loaded
    counter : number = 0;
    images : any[] = [];

    //How often the banner changes (ms)
    changeInterval : number = 5000;

    constructor (private bannerService : BannerService) {
        this.bannerList = bannerService.getBannerImages();
    }

    loaded (image) {
        this.images.push(image);
        this.counter++;

        //if all banner images are loaded!!
        if(this.counter == this.bannerList.length) {
            console.warn("ALL BANNER IMAGES LOADED");
            this.animateBanner();
        }
    }

    animateBanner () {
        var repeat = ()=>{
            var rand = Math.floor(Math.random()*this.images.length);
            //Make the random image show
            this.images[rand].style.opacity = 1;
            var innerRep = ()=>{
                //Hide previous image
                this.images[rand].style.opacity = 0;
                let temp = rand;
                //get new random number that isn't a repeat
                while(rand == temp) {
                    //rand = Math.floor(Math.random()*this.images.length);
                    rand = (rand+1)%this.bannerList.length;
                }
                //Show new image
                this.images[rand].style.opacity = 1;
            };
            setInterval(innerRep, this.changeInterval);
        };
        repeat();
    }
}
