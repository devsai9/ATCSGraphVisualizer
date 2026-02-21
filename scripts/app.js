import { data } from "./data.js";

import { drawFullGraph, resizeCanvas, updateTooltip } from "./canvas.js";
import { attachUIEventListeners, config } from "./uiControls.js";

attachUIEventListeners();

window.addEventListener("resize", () => {
    resizeCanvas();
    if (config.graphEnabled) drawFullGraph(data[config.dataMode], true);
});

document.addEventListener("mousemove", (e) => updateTooltip(data[config.dataMode], e));