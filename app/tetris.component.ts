import {Component} from 'angular2/core';

import {MobileService} from './mobile.service';
@Component ({
    selector: 'tetris',
    template: `
        <div class="tetris-container app-width">

            <img #b class="tetris-bottom app-width" (load)="handleBottom(b)" src="images/tetris-bottom-big.jpg">
        </div>
        <img #t class="tetris-top app-width" (load)="handleTop(t)" src="images/tetris-top.png">
    `
})
export class Tetris {
    t : any;
    b : any;
    container;
    tetris;
    constructor (private mobileService : MobileService) {

    }

    handleTop (t) {
        this.t = t;
        var me = this;
        var start = 0;
        var height;
        if(this.mobileService.isMobile()) {
            height = window.outerHeight;
        }
        else {
            height = window.innerHeight;
        }
        this.container = document.getElementsByClassName("tetris-container")[0];
        this.container.style.height = height + "px";
        this.tetris = document.getElementsByTagName("tetris")[0];
        var handler = (e) => {

            if(this.mobileService.isMobile()) {
                height = window.outerHeight;
            }
            else {
                height = window.innerHeight;
            }
            this.container.style.height = height + "px";
            var rect = this.tetris.getBoundingClientRect();

            if(rect.top > 0) {
                this.container.style.position = "absolute";
                this.container.style.top = "0";
                this.container.style.bottom = "";

                t.style.position = "absolute";
                t.style.bottom = this.tetris.offsetHeight;
            }
            else if (rect.bottom <= height) {
                this.container.style.position = "absolute";
                this.container.style.bottom = "0";
                this.container.style.top = "";
                t.style.position = "absolute";
                t.style.bottom = 0;
                t.style.top = "";
            }
            else {
                this.container.style.position = "fixed";
                this.container.style.bottom = "0";
                this.container.style.top = "";

                t.style.position = "fixed";
                t.style.bottom = height * ((rect.bottom - height)/(rect.bottom - rect.top- height));
            }

        }
        document.addEventListener("scroll", handler);

        window.addEventListener("resize", handler);
    }

    handleBottom (b) {
        document.getElementById("app-loading-mask").style.display = "none";
        // this.b = b;
        // var me = this;
        // var top = me.b.offsetTop;
        // document.addEventListener("scroll", (e) => {
        //     if(me.b.style.top == "") {
        //         me.b.style.top = top + "px";
        //     }
        //     me.b.style.top = top + (window.pageYOffset) + "px";
        // });
    }
}
