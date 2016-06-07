import {Component} from 'angular2/core';

@Component ({
    selector: 'tetris',
    template: `
        <div class="tetris-container">

            <img #b class="tetris-bottom" (load)="handleBottom(b)" src="images/tetris-bottom-small.jpg">
        </div>
        <img #t class="tetris-top" (load)="handleTop(t)" src="images/tetris-top.png">
    `
})
export class Tetris {
    t : any;
    b : any;
    container;
    tetris;
    constructor () {

    }

    handleTop (t) {
        this.t = t;
        var me = this;
        var start = 0;


        this.container = document.getElementsByClassName("tetris-container")[0];
        this.container.style.height = window.innerHeight + "px";
        this.tetris = document.getElementsByTagName("tetris")[0];

        document.addEventListener("scroll", (e) => {
            var rect = this.tetris.getBoundingClientRect();
            console.log(rect);
            if(rect.top > 0) {
                this.container.style.position = "absolute";
                this.container.style.top = "0";

                t.style.position = "absolute";
                t.style.bottom = this.tetris.offsetHeight;
                t.style.bottom = "";
            }
            else if (rect.bottom <= window.innerHeight) {
                this.container.style.position = "absolute";
                this.container.style.bottom = "0";

                t.style.position = "absolute";
                t.style.bottom = 0;
                t.style.top = "";
            }
            else {
                this.container.style.position = "fixed";

                t.style.position = "fixed";
                console.log(this.tetris.x);
                t.style.bottom = window.innerHeight * ((this.tetris.offsetHeight - ( window.pageYOffset))/(this.tetris.offsetHeight - t.offsetHeight));
            }


        });

        window.addEventListener("resize", (e) => {
        });
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
