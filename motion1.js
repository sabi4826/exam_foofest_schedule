"use strict";
// import the animation from motion one website
import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

/* scrolling bar animation */
//this is the progress bar - it will show a line on the left side of the screen (before scrolling)
scroll(animate(".progress", { scaleY: [0, 1] }));

//ensures that the scroll bar is a bit more smooth
inView((info) => {
  const controls = animate(info.target, { opacity: [0, 1] }, { duration: 2 });
});
