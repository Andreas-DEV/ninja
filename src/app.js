import Initialize from "./Initialize";
import ShowActors from "./ShowActors"
import "../css/style.scss";

// **  IIFE: Immediately Invoked Function Expression  */

(function () {

  const dataObj = [{
    name: "Death Smokie",
    img: "black-ninja.png",
    information: { strength: 100, lives: 10 },
    text: "Ninja Killer dont touch him",
},
{
    name: "Black Scum",
    img: "black-ninja-alien.png",
    information: { strength: 90, lives: 5 },
    text: "Black Scum is a Ninja Killer",
},
{
    name: "Ping Pang",
    img: "black-ninjapengiun.png",
    information: { strength: 80, lives: 4 },
    text: "Just som penguin Shit",
},];

  console.log("starting the cool->app test");

  let init = new Initialize();

  new ShowActors(dataObj);

})();
