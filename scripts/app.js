import { data } from "./data.js";

import { drawFullGraph, resizeCanvas } from "./canvas.js";
import { attachUIEventListeners, config, handleMouseClick, handleMouseMove } from "./uiControls.js";

attachUIEventListeners();

window.addEventListener("resize", () => {
    resizeCanvas();
    if (config.graphEnabled) drawFullGraph(data[config.dataMode], true);
});

document.addEventListener("mousemove", (e) => handleMouseMove(data[config.dataMode], e));
document.addEventListener("click", (e) => handleMouseClick(data[config.dataMode], e));