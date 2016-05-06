import {Injectable} from 'angular2/core';

@Injectable()
export class BannerService {
    pathToImages:string = "images/banners/";
    bannerList : string[] = [];
    numBannerImages : number = 8;

    constructor () {
        //Set up bannerList (hard-coded bannerX.jpg, X = number)
        for (let index = 1; index <= this.numBannerImages; index++) {
            this.bannerList.push(`${this.pathToImages}banner${index}.jpg`);
        }
    }

    getBannerImages () {
        return this.bannerList;
    }
}
