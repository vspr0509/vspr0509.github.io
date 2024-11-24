import * as imps from "../src/utils.js";

globalThis.imp1 = imps;
setTimeout(() => console.log("utils2", imps.profession), 3000);

export { x as default } from "./utils.js";
