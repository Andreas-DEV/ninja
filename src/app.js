import Initialize from "./Initialize";
import ShowActors from "./ShowActors"
import data from "../assets/data.json"
import "../css/style.scss";

(function () {

  console.log("starting the cool->app test");

  let init = new Initialize();

  new ShowActors(data.content);

})();
