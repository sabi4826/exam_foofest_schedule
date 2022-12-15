"use strict";

import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

/* scrolling animations */
//PROGRESS BAR
scroll(animate(".progress", { scaleY: [0, 1] }));

// Selector
inView(".highlight h2", (info) => {
  const controls = animate(info.target, { opacity: [0, 1] }, { duration: 2 }, { repeat: 0 });
});

//animate article
inView(".article", (info) => {
  const controls = animate(info.target, { opacity: [0, 1] }, { duration: 2 });
});
