"use strict";
// import the animation from motion one website
import { animate, scroll } from "https://cdn.skypack.dev/motion";

/* scrolling bar animation */
//this is the progress bar - it will show a line on the left side of the screen (before scrolling)
scroll(animate(".progress", { scaleY: [0, 1] }));
