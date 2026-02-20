import { data } from "./data.js";

import { drawGraph, resizeCanvas, updateTooltip } from "./canvas.js";
import { attachUIEventListeners, config } from "./uiControls.js";

attachUIEventListeners();

window.addEventListener("resize", () => {
    resizeCanvas();
    if (config.graphEnabled) drawGraph(data[config.dataMode], true);
});

document.addEventListener("mousemove", (e) => updateTooltip(data[config.dataMode], e));