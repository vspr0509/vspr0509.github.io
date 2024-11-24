import * as modImp from "./utils.js";
import utils2 from "./utils2.js";
console.log(modImp.sum(2, 5));
console.log(modImp.multiply(2, 5));
globalThis.imp2 = modImp;
console.log(modImp.profession, modImp);
console.log("u2", utils2);
setTimeout(() => console.log("utils 1", modImp.profession, modImp), 5000);
setTimeout(() => console.log("utils 2", modImp.profession, modImp), 15000);
