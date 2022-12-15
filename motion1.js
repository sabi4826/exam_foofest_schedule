"use strict";

import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

/* scrolling animations */
//PROGRESS BAR
scroll(animate(".progress", { scaleY: [0, 1] }));

// Selector
inView(".highlight h2", (info) => {
  console.log("highlight has enetered the view port");
  const controls = animate(info.target, { opacity: [0, 1] }, { duration: 2 }, { repeat: 0 });
});

//animate articles
inView(".article", (info) => {
  console.log("article has enetered the view port");
  const controls = animate(info.target, { opacity: [0, 1] }, { duration: 2 });
});
