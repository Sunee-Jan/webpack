import "./style.less";
import "./style.less";
import "./x.styl";
export default "xxx";
import png from "./assets/test.png";
const div = document.getElementById("app");
div.innerHTML = `<img src="${png}">`;
const button = document.createElement("button");
button.innerHTML = "点击加载";
div.appendChild(button);
button.onclick = function () {
  const promise = import("./lazy.js");
  promise.then((module) => {
    const fn = module.default;
    fn();
  });
};
