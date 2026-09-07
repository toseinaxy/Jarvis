const say = require("say");
const config = require("./Config.js");

console.log(config.name + " wurde gestartet!");

function jarvis(text) {
  console.log(config.name + ":", text);
  say.speak(text);
}

jarvis("Hallo! Ich bin " + config.name + ".");
