import {Component, OnInit} from 'angular2/core';
import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'intro',
    template : `

        <div class="outro-container">
            <img #image2 class="outro-image" (load)="outroImageLoaded(image2, image3, moon)" src="images/outro1.jpg">
            <img #image3 class="outro-image" (load)="outroImageLoaded(image2, image3, moon)" src="images/outro2.jpg">
            <img #moon class="outro-image moon" (load)="outroImageLoaded(image2, image3, moon)" src="images/moon.png">
            <div class="outro-panel first">

                <div class="outro-inner-panel right">
                    <div>

                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel left">
                    <div>

                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel center">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    `
})

export class Intro implements OnInit {
    introImage;
    outroImage;
    loaded = false;

    loadedCount = 0;
    imageCount = 3;

    introContainer;

    introImage1;
    outroImage1;
    outroImage2;
    moon;

    constructor (private scrollingService : ScrollingService) {

    }

    ngOnInit () {

    }

    introImageLoaded(image) {
        //Get rid of app loading mask
        document.getElementById("app-loading-mask").style.display = "none";
        //Parallax implementation
        this.introImage1 = image;
        var me = this;
        if(image.style.bottom == "") {
            image.style.bottom = '0px';
        }
        var intro;
        if(intro == null) {
            intro = document.getElementsByClassName("intro-container")[0];
            this.introContainer = intro;
        }
        intro.style.height = window.innerHeight + "px";
        image.style.height = window.innerHeight + "px";
        document.addEventListener("scroll", (e) => {
            if(intro && me.scrollingService.isInViewport(intro)) {
                image.style.bottom = (-1 * Math.floor(window.pageYOffset * .3)) + "px";
            }

        });
        this.loadedCount++;

        if(this.loadedCount == this.imageCount) {
            this.allLoaded();
        }
    }

    outroImageLoaded(image, dreamImage, moon) {
        if(this.loaded) return;

        this.outroImage1 = image;
        this.outroImage2 = dreamImage;
        this.moon = moon;
        this.loadedCount++;

        if(this.loadedCount == this.imageCount) {
            this.allLoaded();
        }
    }

    allLoaded () {
        if(this.loaded) return;
        this.loaded = true;

        var inspireImage = this.outroImage1;
        var dreamImage = this.outroImage2;
        var moon = this.moon;

        if(!inspireImage || !dreamImage) return;


        dreamImage.style.opacity = 0;
        var moonBottom = 0;
        moon.style.bottom = "0px";
        var inspireImageTop = 0, inspireImageLeft=0;
        var me = this;
        if(inspireImage.style.top == "") {
            inspireImage.style.top = '0px';
            inspireImage.style.left = "0px";
        }
        var ycheck = inspireImage.y;
        var orgYCheck = ycheck;
        var outro;
        var inspire = document.getElementsByClassName("outro-inner-panel")[0];
        var dream = document.getElementsByClassName("outro-inner-panel")[1];
        var change = document.getElementsByClassName("outro-inner-panel")[2];
        var isInViewport = this.scrollingService.isInViewport;
        var focus = inspire;
        var prevOffset = 0;
        var scroll = "";
        var viewportSize = window.innerHeight;

        var outropanels = document.getElementsByClassName("outro-panel");
        for (let i = 0; i < outropanels.length; i++) {
            let panel:any = outropanels[i];
            panel.style.height = viewportSize + "px";
        }


        window.addEventListener("resize", (e) => {
            var multiplier = window.innerHeight / viewportSize;
            ycheck = orgYCheck * multiplier;
            this.introContainer.style.height = viewportSize*multiplier + "px";
            this.introImage1.style.height = viewportSize*multiplier + "px";
            for (let i = 0; i < outropanels.length; i++) {
                let panel:any = outropanels[i];
                panel.style.height = viewportSize*multiplier + "px";
            }
        });

        document.addEventListener("scroll", (e) => {

            //var rect = inspireImage.getBoundingClientRect();
            if(window.pageYOffset > prevOffset) {
                scroll = "down";
            }
            else {
                scroll = "up";
            }
            prevOffset = window.pageYOffset;
            if(outro == null) {
                outro = document.getElementsByClassName("outro-container")[0];
            }

            if(outro) {
                if(isInViewport(outro)) {
                    if(outro.getBoundingClientRect().bottom < window.innerHeight) {
                        inspireImage.style.position = "absolute";
                        dreamImage.style.position = "absolute";
                        inspireImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                        dreamImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                    }
                    else if(window.pageYOffset > ycheck) {
                        // inspireImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                        // dreamImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                        inspireImage.style.position = "fixed";
                        dreamImage.style.position = "fixed";
                        inspireImage.style.top = "0px";
                        dreamImage.style.top = "0px";
                    } else if(window.pageYOffset < ycheck) {
                        inspireImage.style.position = "absolute";
                        dreamImage.style.position = "absolute";
                        inspireImage.style.top = "0px";
                        dreamImage.style.top = "0px";
                    }
                }

                inspireImage.style.left = inspireImageLeft - (window.pageYOffset * .1) + 'px';
                dreamImage.style.left = inspireImageLeft - (window.pageYOffset * .1) + 'px';
            }
            if(scroll == "up") {
                if(isInViewport(inspire) && focus != inspire) {
                    focus = inspire;
                    inspireImage.style.opacity = 1;
                    dreamImage.style.opacity = 0;
                }
            }
            else {
                if(isInViewport(dream) && focus != dream) {
                    focus = dream;
                    inspireImage.style.opacity = 0;
                    dreamImage.style.opacity = 1;
                }
            }

            if(isInViewport(change)) {
                moon.style.bottom = moonBottom + ((window.pageYOffset-moon.x-moon.height) * .4);
            }



        });



    }

}
